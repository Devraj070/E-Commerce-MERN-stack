import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ReactComponent as Spinner } from '../../../Loading/spinner.svg'; // Import your spinner SVG file
// StarRating component
const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <span
                key={i}
                className={`text-yellow-400 ${i <= rating ? 'fill-current' : 'fill-transparent'} text-xs`}
            >
                ★
            </span>
        );
    }
    return <div className="flex">{stars}</div>;
};

// Products component
const CanvasArt = () => {
    const [canvasArt, setCanvasArt] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3006/api/products');
                const filteredProducts = response.data.filter(item => item.category === "canvas-arts");
                setCanvasArt(filteredProducts)
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false); // Set loading to false regardless of success or error
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            {loading ? (
                <div className="min-h-screen bg-gray-200 flex justify-center items-center">
                    <Spinner className="h-20 w-20" />
                </div>
            ) : (
                <>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
                        {canvasArt.map((product) => (
                            <div key={product._id} className="p-2">
                                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover object-center" />
                                    <div className="p-4">
                                        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                                        <div className="flex items-center mb-2">
                                            <p className="text-green-700 font-bold mr-2">
                                                ₹{product.discountedPrice}
                                            </p>
                                            <p className="text-sm text-gray-500 line-through">
                                                ₹{product.actualPrice}
                                            </p>
                                            <p className="text-sm text-red-500 ml-2">{product.discountPercentage}% off</p>
                                        </div>
                                        <div className="flex items-center mb-2">
                                            <StarRating rating={product.rating} />
                                        </div>
                                        <Link to={`/product/${product._id}`} className="block w-full text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 no-underline">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

        </div>
    );
};
export default CanvasArt;
