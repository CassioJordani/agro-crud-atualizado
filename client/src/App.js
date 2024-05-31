import React from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>CRUD de Produtos</h1>
      <nav>
        <ul>
          <li><Link to="/new">Adicionar produto</Link></li>
        </ul>
      </nav>
      <ProductList />
    </div>
  );
}

export default App;
