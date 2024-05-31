import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function CreateProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    retailer: "",
    amountInStock: ""
  });

  const navigate = useNavigate();

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
      await addDoc(collection(db, "product"), product);
      navigate("/");
    } catch (error) {
      console.error("Erro ao adicionar documento ", error);
    }
  };

  return (
    <div>
      <h1>Criar produto</h1>
      <form onSubmit={handleSubmit}>
        <p>Nome do produto:</p>
        <input type="text" name="name" placeholder="Name" value={product.name} onChange={handleChange} required />
        <p>Preço:</p>
        <input type="text" name="price" placeholder="Price" value={product.price} onChange={handleChange} required />
        <p>Varejista:</p>
        <input type="text" name="retailer" placeholder="Retailer" value={product.retailer} onChange={handleChange} required />
        <p>Quantidade em estoque:</p>
        <input type="text" name="amountInStock" placeholder="Amount in Stock" value={product.amountInStock} onChange={handleChange} required />
        <button type="submit">Criar</button>
      </form>
    </div>
  );
}
