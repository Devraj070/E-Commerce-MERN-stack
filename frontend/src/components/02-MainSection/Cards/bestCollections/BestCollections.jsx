import React from 'react'
import FurnitureBestCollection from '../FurnitureBestCollection';
import FlowersBestCollection from '../FlowersBestCollection';

const BestCollections = () => {
  return (
    <div className='bg-gray-400 py-6 mx-6 my-4 rounded-lg'>
       <h2 className="text-2xl font-bold text-gray-800 mx-4 my-3">Best Collections</h2>
        <FlowersBestCollection/>
        <FurnitureBestCollection/>
    </div>
  )
}

export default BestCollections;