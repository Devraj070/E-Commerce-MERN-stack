import React, { useState } from 'react';
import axios from 'axios';

function DeleteProduct() {
    const [productId, setProductId] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevents the default form submission behavior

        if (!productId) {
            alert('Please enter a product ID.');
            return;
        }

        try {
            setIsDeleting(true); // Set loading state while deleting
            const response = await axios.delete(`http://localhost:3006/api/delete-product/${productId}`);
            if (response.status === 200) {
                alert('Product deleted successfully!');
                setProductId(''); // Clear the input after deletion
            } else {
                alert('Failed to delete product. Please try again.');
            }
        } catch (error) {
            console.error('Error deleting product:', error);
            alert('Error deleting product: ' + error.message); // Display the specific error message
        } finally {
            setIsDeleting(false); // Reset loading state after deletion attempt
        }
    };

    return (
        <div className="max-w-md mx-auto my-4 bg-white p-8 border border-gray-300 shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Delete Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Product ID:
                        <input
                            type="text"
                            name="id"
                            value={productId}
                            onChange={(e) => setProductId(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </label>
                </div>
                <button type="submit" className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isDeleting ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    {isDeleting ? 'Deleting...' : 'Delete'}
                </button>
            </form>
        </div>
    );
}

export default DeleteProduct;
