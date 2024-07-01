import React from 'react';
import img1 from '../../../../assets/office-decoration/img1.jpg';
import img2 from '../../../../assets/Sofa-product/img-2.webp';

const WeOffer = ({ product }) => {
  if (!product) {
    return <div>No product details available</div>;
  }

  const { name, description, price, image, rating } = product;

  let productImage;
  if (image === 'img1.jpg') {
    productImage = img1;
  } else if (image === 'img-2.webp') {
    productImage = img2;
  }
  // Add similar if-else statements for other product images

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={productImage} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        {/* <h2 className="text-xl font-bold mb-2">{name}</h2> */}
        <h2 className="text-blue-500 text-center">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
            View More <span>&gt;</span>
          </button>
        </h2>

        {/* <p className="text-gray-700 mb-4">{description}</p> */}
        {/* <p className="text-green-500 font-semibold">${price}</p> */}
        {/* <p className="text-yellow-500">Rating: {rating}/5</p> */}
        {/* <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300">
          Add to Cart
        </button> */}
      </div>
    </div>
  );
};

export default WeOffer;