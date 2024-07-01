import React from 'react';
import './Card.css';
import plants from '../../../assets/Trends/plants.webp';
import furnitures from '../../../assets/Trends/furnitures.jpeg';
import interior from '../../../assets/Trends/interior-design.jpg';
import decoration from '../../../assets/Trends/decor.png';

function Card() {
  return (
    <div className='Big-card-container'>
      <h3>In Trend</h3>
      <a href="/products/plants" rel="noopener noreferrer" className='c1'>
        <div className='upper-c1'>
          <img src={plants} alt="Plants" />
        </div>
        <div className='lower-c1'>
          <h2>Plants</h2>
          <p>Beautiful indoor and outdoor plants</p>
        </div>
      </a>
      <a href="products/furniture" rel="noopener noreferrer" className='c2'>
        <div className='upper-c2'>
          <img src={furnitures} alt="furniture" />
        </div>
        <div className='lower-c2'>
          <h2>Furniture</h2>
          <p>Smooth furniture</p>
        </div>
      </a>
      <a href="/products/interior/design" rel="noopener noreferrer" className='c3'>
        <div className='upper-c3'>
          <img src={interior} alt="interior" />
        </div>
        <div className='lower-c3'>
          <h2>Interior Design</h2>
          <p>Book now</p>
        </div>
      </a>
      <a href="/book-decorations" rel="noopener noreferrer" className='c4'>
        <div className='upper-c4'>
          <img src={decoration} alt="decoration" />
        </div>
        <div className='lower-c4'>
          <h2>Decorations</h2>
          <p>For all your decoration needs</p>
        </div>
      </a>
    </div>
  );
}

export default Card;