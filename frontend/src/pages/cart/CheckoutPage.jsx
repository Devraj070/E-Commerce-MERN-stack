import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
    const [orderDetails, setOrderDetails] = useState(null);
    const [userDetails, setUserDetails] = useState({
        name: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
    });

    const [paymentDetails, setPaymentDetails] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        const storedOrderDetails = localStorage.getItem('orderDetails');
        if (storedOrderDetails) {
            setOrderDetails(JSON.parse(storedOrderDetails));
        }
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name in userDetails) {
            setUserDetails(prevState => ({ ...prevState, [name]: value.trim() }));
        } else {
            setPaymentDetails(prevState => ({ ...prevState, [name]: value.trim() }));
        }
    };

    const validateInputs = () => {
        const { name, address, city, postalCode, country } = userDetails;
        const { cardNumber, expiryDate, cvv } = paymentDetails;

        // Basic validation rules
        if (!name || !address || !city || !postalCode || !country) return false;
        if (!/^\d{16}$/.test(cardNumber)) return false; // Card number should be 16 digits
        if (!/^\d{2}\/\d{2}$/.test(expiryDate)) return false; // Expiry date format MM/YY
        if (!/^\d{3}$/.test(cvv)) return false; // CVV should be 3 digits

        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateInputs()) {
            alert('Please fill in all fields correctly.');
            return;
        }

        const completeOrderDetails = {
            ...orderDetails,
            userDetails,
            paymentDetails
        };

        console.log('Complete Order Details:', completeOrderDetails);

        try {
            const response = await fetch('http://localhost:3006/api/place-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(completeOrderDetails),
            });

            if (!response.ok) {
                const errorDetails = await response.json();
                console.error('Error placing order:', errorDetails);
                throw new Error(errorDetails.message || 'Failed to place order');
            }

            console.log('Order placed successfully');
            localStorage.removeItem('orderDetails');
            navigate('/ty');
        } catch (error) {
            console.error('Error placing order:', error.message);
        }
    };

    if (!orderDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="mx-auto max-w-4xl p-5">
            <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Checkout</h1>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold mb-4">Shipping Details</h2>
                <div className="grid gap-4 mb-4 grid-cols-1 md:grid-cols-2">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={userDetails.name}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={userDetails.address}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={userDetails.city}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                    />
                    <input
                        type="text"
                        name="postalCode"
                        placeholder="Postal Code"
                        value={userDetails.postalCode}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                    />
                    <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        value={userDetails.country}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                    />
                </div>

                <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
                <div className="grid gap-4 mb-6 grid-cols-1 md:grid-cols-3">
                    <input
                        type="text"
                        name="cardNumber"
                        placeholder="Card Number"
                        value={paymentDetails.cardNumber}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                    />
                    <input
                        type="text"
                        name="expiryDate"
                        placeholder="Expiry Date (MM/YY)"
                        value={paymentDetails.expiryDate}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                    />
                    <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        value={paymentDetails.cvv}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                    />
                </div>

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Place Order
                </button>
            </form>
        </div>
    );
};

export default CheckoutPage;
