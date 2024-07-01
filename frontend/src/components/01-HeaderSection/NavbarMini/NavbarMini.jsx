import React, { useState, useEffect } from 'react';
import './NavbarMini.css';
import { useNavigate } from 'react-router-dom';

function NavbarMini() {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className='a-1'>
      {isMobile ? (
        <p>Shop by <br /> <b>Category</b></p>
      ) : (
        <ul className="category-list">

          <li className='font-bold text-lg' onClick={() => handleClick('/all-products')}>
            All products ▼
          </li>

          <li className="category-item" onClick={() => handleClick('/products/furniture')}>
            Furniture
            <div className="additional-items">
              <ul>
                <li>Sofas</li><br />
                <li>Tables</li><br />
                <li>Chairs</li>
              </ul>
            </div>
          </li>
          <li className="category-item" onClick={() => handleClick('/products/wallpaper')}>
            Wallpaper
            <div className="additional-items">
              <ul>
                <li>Patterned Wallpaper</li><br />
                <li>Textured Wallpaper</li><br />
                <li>Printed Wallpaper</li>
              </ul>
            </div>
          </li>
          <li className="category-item" onClick={() => handleClick('/products/lighting')}>
            Lighting
            <div className="additional-items">
              <ul>
                <li>Ceiling Lights</li><br />
                <li>Table Lamps</li><br />
                <li>Floor Lamps</li>
              </ul>
            </div>
          </li>
          <li className="category-item" onClick={() => handleClick('/products/curtains')}>
            Curtains
            <div className="additional-items">
              <ul>
                <li>Sheer Curtains</li><br />
                <li>Blackout Curtains</li><br />
                <li>Valances</li>
              </ul>
            </div>
          </li>
          <li className="category-item" onClick={() => handleClick('/products/rugs')}>
            Rugs
            <div className="additional-items">
              <ul>
                <li>Area Rugs</li><br />
                <li>Runner Rugs</li><br />
                <li>Round Rugs</li>
              </ul>
            </div>
          </li>
          <li className="category-item" onClick={() => handleClick('/products/paintings')}>
            Paintings
            <div className="additional-items">
              <ul>
                <li>Canvas Art</li><br />
                <li>Oil Paintings</li><br />
                <li>Abstract Art</li>
              </ul>
            </div>
          </li>
          <li className="category-item" onClick={() => handleClick('/products/accessories')}>
            Accessories
            <div className="additional-items">
              <ul>
                <li>Vases</li><br />
                <li>Candles</li><br />
                <li>Mirrors</li>
              </ul>
            </div>
          </li>
          <li className="category-item" onClick={() => handleClick('/products/ornaments')}>
            Ornaments
            <div className="additional-items">
              <ul>
                <li>Decorative Bowls</li><br />
                <li>Sculptures</li><br />
                <li>Figurines</li>
              </ul>
            </div>
          </li>
          <li className="category-item" onClick={() => handleClick('/products/plants')}>
            Plants
            <div className="additional-items">
              <ul>
                <li>Indoor Plants</li><br />
                <li>Succulents</li><br />
                <li>Artificial Plants</li>
              </ul>
            </div>
          </li>
          {/* <span className="bg-black text-white rounded-xl hover:bg-green-500 p-2 cursor-pointer ml-96" onClick={() => handleClick('/products/interior/design')}>
            Book Interior Design */}
          {/* <div className="additional-items">
              <ul>
                <li>Throw Pillows</li><br />
                <li>Wall Art</li><br />
                <li>Home Decor</li>
              </ul>
            </div> */}
          {/* </span> */}
        </ul>
      )}
    </div>
  );
}

export default NavbarMini;
