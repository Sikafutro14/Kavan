// src/components/ProductList.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import './ProductList.css';


const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Update URL to match your Django API endpoint
    axios
      .get("http://127.0.0.1:8000/api/products/") // Adjust the API URL as needed
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
