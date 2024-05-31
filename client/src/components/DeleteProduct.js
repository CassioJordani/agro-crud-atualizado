import React, { useEffect, useState } from "react";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useParams, useNavigate } from "react-router-dom";

export default function DeleteProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

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

  const handleDelete = async () => {
    try {
      const docRef = doc(db, "product", id);
      await deleteDoc(docRef);
      navigate("/");
    } catch (error) {
      console.error("Erro ao deletar documento: ", error);
    }
  };

  if (!product) return <div>Carregando...</div>;

  return (
    <div>
      <h1>Deletar Produto</h1>
      <p>Deseja deletar o produto?</p>
      <p>Nome: {product.name} - Preço: R$ {product.price} - Varejista: {product.retailer} - Quantidade em estoque: {product.amountInStock}</p>
      <button onClick={handleDelete}>Sim</button>
      <button onClick={() => navigate("/")}>Cancelar</button>
    </div>
  );
}
