import React, { useState, useEffect } from 'react';
import Slider_img1 from '../../assets/slider-img1.jpg'
import Slider_img2 from '../../assets/slider-img2.jpg'
import Slider_img3 from '../../assets/slider-img3.jpg'
// import ContactUs from '../01-HeaderSection/Navbar/ContactUs';
// import Slider_img4 from '../../assets/slider-img4.jpg';
import { Link } from "react-router-dom";


import './Slider.css'

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  const images = [Slider_img3, Slider_img2, Slider_img1]; 

  const handleDotClick = (index) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    let intervalId;

    if (autoSlide) {
      intervalId = setInterval(() => {
        nextSlide(); // Use nextSlide function to loop through images
      }, 3000); // Change the interval time (in milliseconds) as needed
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [autoSlide]);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };


  

  return (
    <>
    <div  className='read-more-button'>
      <p>FOR ALL YOUR<br></br> DECORATION NEEDS </p>
    <button > <Link to="/ContactUs">Contact us</Link> </button>
    </div>
    <div className="slider-container">
      
      <div
        className="slider"
        style={{ transform: `translateX(-${slideIndex * 100}%)` }}
        onMouseEnter={() => setAutoSlide(false)}
        onMouseLeave={() => setAutoSlide(true)}
      >
        {images.map((image, index) => (
          <img src={image} alt={`Slide ${index + 1}`} key={index} />
        ))}
      </div>
      <div className="dots-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${slideIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
    </>
  );


};

export default Slider;
