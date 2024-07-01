// AboutUs.js

import React from 'react';
import './About.css'; // Import your CSS file
import Footer from '../../03-FooterSection/Footer';

const About = () => {
  return (
    <>
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>
        Welcome to mySweetHome! We are passionate about helping you find the
        perfect home ingredients to make your space truly yours.
      </p>
      <p>
        Our vision is to simplify the process of buying and selling quality home
        essentials like furniture, decor, and more.
      </p>
      <h2>Our Mission</h2>
      <p>
        At mySweetHome, we aim to provide a seamless and enjoyable experience
        for our users. We believe in curating a collection of high-quality
        products and fostering a community-centric approach.
      </p>
      <h2>Why Choose Us?</h2>
      <ul>
        <li>Quality Assurance in all our products</li>
        <li>User-friendly interface designed for you</li>
        <li>Community-driven platform</li>
      </ul>
      <p>
        Join us today and explore our wide range of home essentials!
      </p>
    </div>
    <Footer/>
    </>
  );
};

export default About;
