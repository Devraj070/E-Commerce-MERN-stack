import React from 'react';
import WeOffer from './WeOffer';
import OffersData from './OffersData'; // Import the array of products

const Offers = () => {
  return (
    <div className="mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Our Exclusive Offers</h1>
      <p className="text-center text-gray-700 mb-8">
        Discover our range of products at unbeatable prices. Quality products, exceptional deals, just for you.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {OffersData.map((product) => (
          <WeOffer key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Offers;