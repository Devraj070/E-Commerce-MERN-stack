import React, { useState } from 'react';
import axios from 'axios';

function UploadProduct() {
    const [name, setName] = useState('');
    const [actualPrice, setActualPrice] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [rating, setRating] = useState(0);
    const [category, setCategory] = useState('');

    const discountedPrice = (parseFloat(actualPrice) * (100 - parseFloat(discountPercentage)) / 100).toFixed(2);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', 'mySweetHome.com');
        formData.append('name', name);
        formData.append('actualPrice', actualPrice);
        formData.append('discountPercentage', discountPercentage);
        formData.append('discountedPrice', discountedPrice);
        formData.append('description', description);
        formData.append('rating', rating);
        formData.append('category', category);

        try {
            const response = await axios.post('https://api.cloudinary.com/v1_1/dc7vztzup/image/upload', formData);
            if (response.status === 200) {
                const imageUrl = response.data.secure_url;
                const productData = {
                    name, actualPrice, discountPercentage, discountedPrice,
                    description, imageUrl, rating, category
                };
                const productResponse = await axios.post('http://localhost:3006/api/upload-product-details', productData);
                if (productResponse.status === 200) {
                    alert('Product added successfully!');
                    setName('');
                    setActualPrice('');
                    setDiscountPercentage('');
                    setDescription('');
                    setImage(null);
                    setRating(0);
                    setCategory('');
                } else {
                    alert('Failed to add product');
                }
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error adding product');
        }
    };

    const categoryOptions = [
        { label: 'Interior Design', value: 'interior-design' },
        //Throw Pillows
        //Wall Art
        //Home Decor
        { label: 'Throw Pillows', value: 'throw-pillows' },
        { label: 'Wall Art', value: 'wall-art' },
        { label: 'Home Decor', value: 'home-decor' },



        { label: 'Furniture', value: 'furniture' },
        { label: 'Sofa', value: 'sofa' },
        { label: 'Table', value: 'table' },
        { label: 'Chair', value: 'chair' },


        { label: 'Wallpaper', value: 'wallpaper' },
        //Patterned Wallpaper
        //Textured Wallpaper
        //Printed Wallpaper
        { label: 'Patterned Wallpaper', value: 'patterned-wallpaper' },
        { label: 'Textured Wallpaper', value: 'textured-wallpaper' },
        { label: 'Printed Wallpaper', value: 'printed-wallpaper' },


        { label: 'Lighting', value: 'lighting' },
        // Ceiling Lights
        //Table Lamps
        //Floor Lamps
        { label: 'Ceiling Lights', value: 'ceiling-lights' },
        { label: 'Table Lamps', value: 'table-lamps' },
        { label: 'Floor Lamps', value: 'floor-lamps' },


        { label: 'Curtains', value: 'curtains' },
        //Sheer Curtains
        //Blackout Curtains
        //Valances
        { label: 'Sheer Curtain', value: 'sheer-curtains' },
        { label: 'Blackout Curtain', value: 'blackout-curtains' },
        { label: 'Valances', value: 'valances' },




        { label: 'Rugs', value: 'rugs' },
        //Area Rugs
        //Runner Rugs
        //Round Rugs
        { label: 'Area Rugs', value: 'area-rugs' },
        { label: 'Runner Rugs', value: 'runner-rugs' },
        { label: 'Round Rugs', value: 'round-rugs' },



        { label: 'Paintings', value: 'paintings' },
        //Canvas Art
        //Oil Paintings
        //Abstract Art
        { label: 'Canvas Arts', value: 'canvas-arts' },
        { label: 'Oil Paintings', value: 'oil-paintings' },
        { label: 'Abstract Arts', value: 'abstract-arts' },

        { label: 'Accessories', value: 'accessories' },
        //Vases
        //Candles
        //Mirrors
        { label: 'Vases', value: 'vases' },
        { label: 'Candles', value: 'candles' },
        { label: 'Mirrors', value: 'mirrors' },




        { label: 'Ornaments', value: 'ornaments' },
        //Decorative Bowls
        //Sculptures
        //Figurines
        { label: 'Decorative Bowls', value: 'decorative-bowls' },
        { label: 'Sculptures', value: 'sculptures' },
        { label: 'Figurines', value: 'figurines' },


        { label: 'Plants', value: 'plants' },
        //Indoor Plants
        //Succulents
        //Artificial Plants
        { label: 'Indoor Plants', value: 'indoor-plants' },
        { label: 'Succulents', value: 'succulents' },
        { label: 'Artificial Plants', value: 'artificial-plants' },

    ];

    return (
        <div className="max-w-4xl mx-auto my-4 bg-white p-8 border border-gray-200 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Add Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Category:
                        <select value={category} onChange={(e) => setCategory(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option value="">Select a category</option>
                            {categoryOptions.map((option, index) => (
                                <option key={index} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </label>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Name:
                        <input type="text" value={name} onChange={(event) => setName(event.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </label>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Actual Price:
                        <input type="number" value={actualPrice} onChange={(event) => setActualPrice(event.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </label>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Discount Percentage:
                        <input type="number" value={discountPercentage} onChange={(event) => setDiscountPercentage(event.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </label>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Discounted Price:
                        <input type="text" value={discountedPrice} readOnly
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </label>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Description:
                        <textarea value={description} onChange={(event) => setDescription(event.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </label>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Rating:
                        <input type="number" value={rating} onChange={(event) => setRating(event.target.value)}
                            min="0" max="5" step="0.1"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </label>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Image (Leave blank if unchanged):
                        <input type="file" onChange={(event) => setImage(event.target.files[0])}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </label>
                </div>
                <div className="flex justify-end">
                    <button type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UploadProduct;
