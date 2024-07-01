import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const userId = sessionStorage.getItem('userId');
                if (!userId) {
                    throw new Error('User not logged in');
                }

                const response = await axios.get('http://localhost:3006/api/get-user-orders', {
                    headers: { 'user-id': userId },
                });
                setOrders(response.data);
            } catch (err) {
                setError('Failed to fetch orders');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="mx-auto max-w-4xl p-5">
            <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">My Orders</h1>
            {orders.length === 0 ? (
                <p className="text-center text-gray-600">No orders found</p>
            ) : (
                orders.map((order) => (
                    <div key={order._id} className="mb-6 bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-xl font-semibold mb-2">Order ID: {order._id}</h2>
                        <p className="mb-2">Total Amount: ₹{order.totalAmount}</p>
                        <p className="mb-2">Status: {order.status}</p>
                        <p className="mb-4">Order Date: {new Date(order.orderDate).toLocaleDateString()}</p>
                        <h3 className="text-lg font-semibold mb-2">Products:</h3>
                        <ul className="list-disc list-inside">
                            {order.cartItems.map((item) => (
                                <li key={item.productId._id}>
                                    {item.product.name} - Quantity: {item.quantity}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            )}
        </div>
    );
};

export default MyOrder;