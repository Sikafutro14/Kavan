const API_BASE_URL = "http://127.0.0.1:8000/api"; // Django API URL

export const fetchCategories = async () => {
    const response = await fetch(`${API_BASE_URL}/categories/`);
    return response.json();
};

export const fetchCart = async () => {
    const response = await fetch(`${API_BASE_URL}/carts/`);
    return response.json();
};

export const fetchOrders = async () => {
    const response = await fetch(`${API_BASE_URL}/orders/`);
    return response.json();
};
