import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "product"));
      const productsArray = [];
      querySnapshot.forEach((doc) => {
        productsArray.push({ ...doc.data(), id: doc.id });
      });
      setProducts(productsArray);
    };
    getProducts();
  }, []);

  return (
    <div>
      <h1 className="title">Lista de Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div className="product-info">Nome: {product.name}</div>
            <div className="product-info">Preço: R$ {product.price}</div>
            <div className="product-info">Varejista: {product.retailer}</div>
            <div className="product-info">Quantidade em Estoque: {product.amountInStock}</div>
            <div className="product-actions">
              <Link to={`/update/${product.id}`}>Atualizar</Link>
              <Link to={`/delete/${product.id}`}>Deletar</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
