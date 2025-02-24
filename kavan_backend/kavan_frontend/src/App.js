import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail"; // For later use
// Import other components as necessary, e.g., CartPage

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Home page route */}
                <Route path="/" element={<ProductList />} />
                
                {/* You can add more routes later, e.g., for a single product detail page */}
                <Route path="/product/:id" element={<ProductDetail />} />
                
                {/* Cart page route (if you have it) */}
                {/* <Route path="/cart" element={<CartPage />} /> */}
            </Routes>
        </Router>
    );
};

export default App;
