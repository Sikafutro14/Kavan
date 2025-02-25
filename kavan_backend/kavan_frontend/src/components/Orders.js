import { useEffect, useState } from "react";
import { fetchOrders } from "../services/api";

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders().then(data => setOrders(data));
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Order History</h2>
            {orders.length > 0 ? (
                <ul>
                    {orders.map(order => (
                        <li key={order.id} className="border-b py-2">
                            Order #{order.id} - Total: ${order.total_price}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No orders found.</p>
            )}
        </div>
    );
};

export default Orders;
