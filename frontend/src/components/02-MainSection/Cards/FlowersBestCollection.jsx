import React, { useRef } from 'react';
// import './FlowersBestCollection.css'
import img1 from '../../../assets/best-collection/photo1.jpg';
import img2 from '../../../assets/best-collection/photo2.jpg';
import img3 from '../../../assets/best-collection/photo3.jpg';
import img4 from '../../../assets/best-collection/photo4.jpg';
import img5 from '../../../assets/best-collection/photo1.jpg';
import img6 from '../../../assets/best-collection/photo2.jpg';
import img7 from '../../../assets/best-collection/photo3.jpg';
import img8 from '../../../assets/best-collection/photo4.jpg';

function FlowersBestCollection() {
  const allImages = [img1, img2, img3, img4, img5, img6, img7, img8];
  const sliderRef = useRef(null);

  return (
    <div className="mx-4 px-4 py-4 bg-gray-300 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-bold text-gray-800">On Plants</h2>
      </div>



      
      <div className="overflow-hidden rounded-lg ">
        <div ref={sliderRef} className="flex overflow-x-scroll scroll-smooth scrollbar-hide">
          {allImages.map((img, index) => (
            <div key={index} className="flex-none w-1/5 p-2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={img} alt={`Flower ${index + 1}`} className="w-full h-48 object-cover" />
                <div className="bg-white p-4">
                  <h3 className="text-lg font-semibold text-gray-800">Flower {index + 1}</h3>
                  <p className="text-sm text-gray-600">Description of Flower {index + 1}</p>
                </div>
              </div>
            </div>



          ))}
        </div>
      </div>


    </div>
  );
}

export default FlowersBestCollection;
