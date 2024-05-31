import React, { useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useParams, useNavigate } from "react-router-dom";

export default function UpdateProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    retailer: "",
    amountInStock: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, "product", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        console.log("Doc não existe!");
      }
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, "product", id);
      await updateDoc(docRef, product);
      navigate("/");
    } catch (error) {
      console.error("Erro ao atualizar doc: ", error);
    }
  };

  return (
    <div>
      <h1>Atualizar Produto</h1>
      <form onSubmit={handleSubmit}>
      <p>Nome:</p>
        <input type="text" name="name" placeholder="Name" value={product.name} onChange={handleChange} required />
        <p>Preço:</p>
        <input type="text" name="price" placeholder="Price" value={product.price} onChange={handleChange} required />
        <p>Varejista:</p>
        <input type="text" name="retailer" placeholder="Retailer" value={product.retailer} onChange={handleChange} required />
        <p>Quantidade em estoque:</p>
        <input type="text" name="amountInStock" placeholder="Amount in Stock" value={product.amountInStock} onChange={handleChange} required />
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
}
