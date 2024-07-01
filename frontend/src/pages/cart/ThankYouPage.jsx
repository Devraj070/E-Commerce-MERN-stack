import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/03-FooterSection/Footer';

const ThankYouPage = () => {
    return (
        <div style={{ backgroundColor: '#cde7b3' }}>
            <div className="mx-auto max-w-4xl px-14 pt-10 pb-96">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Thank You for Your Order!</h1>
                <p className="text-center text-gray-600 mb-4">
                    Your order has been placed successfully. You will receive a confirmation email shortly.
                </p>
                <div className="text-center">
                    <Link to="/" className="text-blue-600 hover:text-blue-800 font-bold">
                        ← Return to Home
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ThankYouPage;
