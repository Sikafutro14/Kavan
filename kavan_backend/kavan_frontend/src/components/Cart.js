import { useEffect, useState } from "react";
import { fetchCart } from "../services/api";

const Cart = () => {
    const [cart, setCart] = useState(null);

    useEffect(() => {
        fetchCart().then(data => setCart(data));
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Your Cart</h2>
            {cart ? (
                <ul>
                    {cart.items.map(item => (
                        <li key={item.id} className="border-b py-2">
                            {item.product.name} - {item.quantity}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Cart;
