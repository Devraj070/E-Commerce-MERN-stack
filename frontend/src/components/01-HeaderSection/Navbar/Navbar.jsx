import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import SearchBox from './SearchBox';
import LoginModal from '../../../User/LoginModal'; // Import the LoginModal component
import Profile from '../../../User/Profile'; // Import the Profile component
import { FaUser, FaBars } from 'react-icons/fa';
import logo from '../../../assets/mySweetHome.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false); // State to control modal visibility
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [isProfileOpen, setProfileOpen] = useState(false); // State to track profile menu visibility
  const menuRef = useRef(null);
  const profileRef = useRef(null);
  const profileButtonRef = useRef(null);
  const isMobile = window.innerWidth <= 768; // Define mobile breakpoint

  useEffect(() => {
    const loggedInStatus = sessionStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleLoginModal = () => {
    setLoginModalOpen(!isLoginModalOpen);
  };

  const handleUserProfile = () => {
    setProfileOpen(!isProfileOpen);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn'); // Remove login status from sessionStorage
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('username');

    setIsLoggedIn(false);
    setProfileOpen(false);
    window.location.reload();

  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current && !profileRef.current.contains(event.target) &&
        profileButtonRef.current && !profileButtonRef.current.contains(event.target)
      ) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  const handleLogoClick = () => {
    setActiveLink('/');
  };

  return (
    <nav className='navbar'>
      <div className='logo'><Link to="/" onClick={handleLogoClick}>mySweetHome</Link></div>
      {/* <div><img src={logo} alt="" className='absolute h-12 w-36 top-1' /></div> */}
      <div><SearchBox /></div>
      <ul ref={menuRef} className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li className={activeLink === '/' ? 'active' : ''} onClick={() => handleLinkClick('/')}><Link to="/">Home</Link></li>
        <li className={activeLink === '/products' ? 'active' : ''} onClick={() => handleLinkClick('/products')}><Link to="/products">Products</Link></li>
        {/* <li className={activeLink === '/weoffer' ? 'active' : ''} onClick={() => handleLinkClick('/weoffer')}><Link to="/weoffer">We Offer</Link></li> */}
        <li className={activeLink === '/about' ? 'active' : ''} onClick={() => handleLinkClick('/about')}><Link to="/about">About</Link></li>
        <li className={activeLink === '/contactus' ? 'active' : ''} onClick={() => handleLinkClick('/contactus')}><Link to="/contactus">Contact Us</Link></li>
      </ul>

      <div className='relative'>
        <div
          ref={profileButtonRef}
          className="bg-black text-white py-2 px-3 mx-4 rounded-full hover:bg-white focus:outline-none hover:text-black cursor-pointer"
          onClick={isLoggedIn ? handleUserProfile : toggleLoginModal}
        >
          {isLoggedIn ? <FaBars /> : <FaUser />}
        </div>
        {isLoggedIn && isProfileOpen && (
          <div ref={profileRef} className="absolute right-0 mt-2">
            <Profile onLogout={handleLogout} />
          </div>
        )}
      </div>

      <div className="burger" onClick={toggleMenu}>
        &#9776;
      </div>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={toggleLoginModal}
        setIsLoggedIn={(value) => {
          sessionStorage.setItem('isLoggedIn', value ? 'true' : 'false');
          setIsLoggedIn(value);
        }}
      /> {/* Render the LoginModal */}
    </nav>
  );
};

export default Navbar;
