// src/components/ProductDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/products/${id}/`) // Adjust URL for detailed product
            .then((response) => setProduct(response.data))
            .catch((error) => console.error(error));
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p>${product.price}</p>
            {/* Additional product details as needed */}
        </div>
    );
};

export default ProductDetail;
