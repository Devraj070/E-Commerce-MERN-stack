import React from 'react';
import './Reviews.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'; // Empty star icon

function Reviews(props) {
  return (
    <div className='testimonial'>
      <img src={props.image} alt="Customer's Profile" />
      <div className="t-name">{props.name}</div>
      <p>{props.location}</p>
      <div className="t-stars">
        {/* Render filled stars */}
        <FontAwesomeIcon icon={solidStar} />
        <FontAwesomeIcon icon={solidStar} />
        <FontAwesomeIcon icon={solidStar} />
        <FontAwesomeIcon icon={solidStar} />
        {/* Render empty star */}
        <FontAwesomeIcon icon={regularStar} />
      </div>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet et, repellat repudiandae numquam maxime unde aliquam aperiam cumque illo id.</p>
    </div>
  );
}
export default Reviews;
