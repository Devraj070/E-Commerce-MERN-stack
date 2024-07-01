import React from 'react';
import { Link } from 'react-router-dom';


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

function SearchResultItem({ result }) {

    return (
        <div>

            <>

                <div key={result._id} className="p-2">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={result.imageUrl} alt={result.name} className="w-full h-64 object-cover object-center" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">{result.name}</h2>
                            <div className="flex items-center mb-2">
                                <p className="text-green-700 font-bold mr-2">
                                    ₹{result.discountedPrice}
                                </p>
                                <p className="text-sm text-gray-500 line-through">
                                    ₹{result.actualPrice}
                                </p>
                                <p className="text-sm text-red-500 ml-2">{result.discountPercentage}% off</p>
                            </div>
                            <div className="flex items-center mb-2">
                                <StarRating rating={result.rating} />
                            </div>
                            <Link to={`/product/${result._id}`} className="block w-full text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 no-underline">View Details</Link>
                        </div>
                    </div>
                </div>


            </>


        </div>
    );
}

export default SearchResultItem;
