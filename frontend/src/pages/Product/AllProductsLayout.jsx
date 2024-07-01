import React, { useState } from 'react';
import Products from './Products';

import Furniture from '../mini-navbar-products/Furnitures/Furnitures';
import Chairs from '../mini-navbar-products/Furnitures/Chairs';
import Sofas from '../mini-navbar-products/Furnitures/Sofas';
import Tables from '../mini-navbar-products/Furnitures/Tables';

import Wallpaper from '../mini-navbar-products/Wallpaper/Wallpaper'
import PrintedWallpaper from '../mini-navbar-products/Wallpaper/PrintedWallpaper'
import TexturedWallpaper from '../mini-navbar-products/Wallpaper/TexturedWallpaper'
import PatternedWallpaper from '../mini-navbar-products/Wallpaper/PatternedWallpaper'

import Lighting from '../mini-navbar-products/Lighting/Lighting'
import CeillingLight from '../mini-navbar-products/Lighting/CeilingLights'
import TableLamps from '../mini-navbar-products/Lighting/TableLamps'
import FloorLamps from '../mini-navbar-products/Lighting/FloorLamps'

import InteriorDesign from '../mini-navbar-products/Interior Design/InteriorDesign'

import Curtains from '../mini-navbar-products/Curtains/Curtains';
import SheerCurtains from '../mini-navbar-products/Curtains/SheerCurtains';
import BlackoutCurtains from '../mini-navbar-products/Curtains/BlackoutCurtain';
import Valances from '../mini-navbar-products/Curtains/Valances';

import Rugs from '../mini-navbar-products/Rugs/Rugs'
import AreaRugs from '../mini-navbar-products/Rugs/AreaRugs'
import RoundRugs from '../mini-navbar-products/Rugs/RoundRugs'
import RunnerRugs from '../mini-navbar-products/Rugs/RunnerRugs'

import Paintings from '../mini-navbar-products/Paintings/Painting'
import CanvasArt from '../mini-navbar-products/Paintings/CanvasArt'
import OilPaintings from '../mini-navbar-products/Paintings/OilPaintings'
import AbstractArts from '../mini-navbar-products/Paintings/AbstractArt'


import Accessories from '../mini-navbar-products/Accessories/Accessories'
import Candles from '../mini-navbar-products/Accessories/Candles';
import Vases from '../mini-navbar-products/Accessories/Vases';
import Mirrors from '../mini-navbar-products/Accessories/Mirrors';

import Ornaments from '../mini-navbar-products/Ornaments/Ornaments';
import DecorativeBowls from '../mini-navbar-products/Ornaments/DecorativeBowls';
import Figurines from '../mini-navbar-products/Ornaments/Figurines';
import Sculptures from '../mini-navbar-products/Ornaments/Sculptures';

import Plants from '../mini-navbar-products/Plants/Plants'
import ArtificialPlants from '../mini-navbar-products/Plants/ArtificialPlants'
import Succulents from '../mini-navbar-products/Plants/Succulents'
import IndoorPlants from '../mini-navbar-products/Plants/IndoorPlants'



function AllProductsLayout() {
  const [view, setView] = useState('default');
  const [subView, setSubView] = useState('');

  const handleCategoryClick = (category) => {
    if (subView === category && category === "Furnitures") {
      setSubView(''); // Close the subview if the same category is clicked again
      setView('Furniture');
    } else if (category === "Wallpaper" || category === "Lighting" || category === "Curtains" || category === "Rugs" || category === "Paintings" || category === "Accessories" || category === "Ornaments" || category === "Plants") {
      if (subView === category) {
        setSubView(''); // Close the subview if the same category is already selected
        setView(category); // Set the main view to the selected category
      } else {
        setSubView(category); // Set the subview to the selected category
        setView(category); // Set the main view to the selected category
      }
    } else {
      setSubView(category); // Set the subview to the clicked category
      setView('Furniture');
    }
  };







  const handleSubCategoryClick = (subCategory) => {
    if (subCategory === 'Sofas') {
      setView('Sofas'); // Set the view to 'Products' when 'Sofas' is clicked
    }
    else if (subCategory === "Chairs") {
      setView("Chairs")
    }
    else if (subCategory === "Tables") {
      setView("Tables")
    }
    // else if (subCategory === "Throw Pillows") {
    //   setView("Throw Pillows")
    // }
    // else if (subCategory === "Wall Art") {
    //   setView("Wall Art")
    // }
    // else if (subCategory === "Home Decor") {
    //   setView("Home Decor")
    // }
    else if (subCategory === "Patterned Wallpaper") {
      setView("Patterned Wallpaper")
    }
    else if (subCategory === "Textured Wallpaper") {
      setView("Textured Wallpaper")
    } else if (subCategory === "Printed Wallpaper") {
      setView("Printed Wallpaper")
    }
    else if (subCategory === "Ceiling Lights") {
      setView("Ceiling Lights")
    }
    else if (subCategory === "Table Lamps") {
      setView("Table Lamps")
    }
    else if (subCategory === "Floor Lamps") {
      setView("Floor Lamps")
    }
    else if (subCategory === "Sheer Curtains") {
      setView("Sheer Curtains")
    }
    else if (subCategory === "Blackout Curtains") {
      setView("Blackout Curtains")
    }
    else if (subCategory === "Valances") {
      setView("Valances")
    }
    else if (subCategory === "Area Rugs") {
      setView("Area Rugs")
    }
    else if (subCategory === "Runner Rugs") {
      setView("Runner Rugs")
    }
    else if (subCategory === "Round Rugs") {
      setView("Round Rugs")
    }
    else if (subCategory === "Canvas Art") {
      setView("Canvas Art")
    }
    else if (subCategory === "Oil Paintings") {
      setView("Oil Paintings")
    }
    else if (subCategory === "Abstract Art") {
      setView("Abstract Art")
    }
    else if (subCategory === "Vases") {
      setView("Vases")
    }
    else if (subCategory === "Candles") {
      setView("Candles")
    }
    else if (subCategory === "Mirrors") {
      setView("Mirrors")
    }
    else if (subCategory === "Decorative Bowls") {
      setView("Decorative Bowls")
    }
    else if (subCategory === "Sculptures") {
      setView("Sculptures")
    }
    else if (subCategory === "Figurines") {
      setView("Figurines")
    }
    else if (subCategory === "Indoor Plants") {
      setView("Indoor Plants")
    }
    else if (subCategory === "Succulents") {
      setView("Succulents")
    }
    else if (subCategory === "Artificial Plants") {
      setView("Artificial Plants")
    }
    else {
      setView(subCategory);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold bg-white pl-4">Available products</h1>
      <div className="flex h-screen bg-gray-200 ">
        {/* Sidebar */}
        <div className="bg-white text-black w-64 flex flex-col justify-between">
          <div className="p-4">
            <nav className="mt-6 text-black rounded-md">
              <ul>
                <li onClick={() => handleCategoryClick('Furnitures')} className="block py-2 px-4 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Furnitures {subView === 'Furnitures' ? '▶' : ' ▼'}</li>
                {subView === 'Furnitures' && (
                  <ul>
                    <li onClick={() => handleSubCategoryClick('Sofas')} className="block py-2 px-8 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Sofas</li>
                    <li onClick={() => handleSubCategoryClick('Tables')} className="block py-2 px-8 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Tables</li>
                    <li onClick={() => handleSubCategoryClick('Chairs')} className="block py-2 px-8 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Chairs</li>
                  </ul>
                )}
                {/* <li onClick={() => handleCategoryClick('Interior Design')} className="block py-2 px-4 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Interior Design {subView === 'Interior Design' ? '▶' : ' ▼'}</li>
                {subView === 'Interior Design' && (
                  <ul>
                    <li onClick={() => handleSubCategoryClick('Throw Pillows')} className="block py-2 px-8 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Throw Pillows</li>
                    <li onClick={() => handleSubCategoryClick('Wall Art')} className="block py-2 px-8 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Wall Art</li>
                    <li onClick={() => handleSubCategoryClick('Home Decor')} className="block py-2 px-8 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Home Decor</li>
                  </ul>
                )} */}
                {/* Add other categories and their subcategories similarly */}
                <li onClick={() => handleCategoryClick('Wallpaper')} className="block py-2 px-4 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Wallpaper {subView === 'Wallpaper' ? '▶' : ' ▼'}</li>
                {subView === 'Wallpaper' && (
                  <ul>
                    <li onClick={() => handleSubCategoryClick('Patterned Wallpaper')} className="block py-2 px-8 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Patterned Wallpaper</li>
                    <li onClick={() => handleSubCategoryClick('Textured Wallpaper')} className="block py-2 px-8 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Textured Wallpaper</li>
                    <li onClick={() => handleSubCategoryClick('Printed Wallpaper')} className="block py-2 px-8 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Printed Wallpaper</li>
                  </ul>
                )}
                <li onClick={() => handleCategoryClick('Lighting')} className="block py-2 px-4 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Lighting {subView === 'Lighting' ? '▶' : ' ▼'}</li>
                {subView === 'Lighting' && (
                  <ul>
                    <li onClick={() => handleSubCategoryClick('Ceiling Lights')} className="block py-2 px-8 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Ceiling Lights</li>
                    <li onClick={() => handleSubCategoryClick('Table Lamps')} className="block py-2 px-8 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Table Lamps</li>
                    <li onClick={() => handleSubCategoryClick('Floor Lamps')} className="block py-2 px-8 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Floor Lamps</li>
                  </ul>
                )}
                <li onClick={() => handleCategoryClick('Curtains')} className="block py-2 px-4 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Curtains {subView === 'Curtains' ? '▶' : ' ▼'}</li>
                {subView === 'Curtains' && (
                  <ul>
                    <li onClick={() => handleSubCategoryClick('Sheer Curtains')} className="block py-2 px-8 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Sheer Curtains</li>
                    <li onClick={() => handleSubCategoryClick('Blackout Curtains')} className="block py-2 px-8 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Blackout Curtains</li>
                    <li onClick={() => handleSubCategoryClick('Valances')} className="block py-2 px-8 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Valances</li>
                  </ul>
                )}
                <li onClick={() => handleCategoryClick('Rugs')} className="block py-2 px-4 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Rugs {subView === 'Rugs' ? '▶' : ' ▼'}</li>
                {subView === 'Rugs' && (
                  <ul>
                    <li onClick={() => handleSubCategoryClick('Area Rugs')} className="block py-2 px-8 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Area Rugs</li>
                    <li onClick={() => handleSubCategoryClick('Runner Rugs')} className="block py-2 px-8 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Runner Rugs</li>
                    <li onClick={() => handleSubCategoryClick('Round Rugs')} className="block py-2 px-8 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Round Rugs</li>
                  </ul>
                )}
                <li onClick={() => handleCategoryClick('Paintings')} className="block py-2 px-4 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Paintings {subView === 'Paintings' ? '▶' : ' ▼'}</li>
                {subView === 'Paintings' && (
                  <ul>
                    <li onClick={() => handleSubCategoryClick('Canvas Art')} className="block py-2 px-8 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Canvas Art</li>
                    <li onClick={() => handleSubCategoryClick('Oil Paintings')} className="block py-2 px-8 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Oil Paintings</li>
                    <li onClick={() => handleSubCategoryClick('Abstract Art')} className="block py-2 px-8 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Abstract Art</li>
                  </ul>
                )}
                <li onClick={() => handleCategoryClick('Accessories')} className="block py-2 px-4 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Accessories {subView === 'Accessories' ? '▶' : ' ▼'}</li>
                {subView === 'Accessories' && (
                  <ul>
                    <li onClick={() => handleSubCategoryClick('Vases')} className="block py-2 px-8 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Vases</li>
                    <li onClick={() => handleSubCategoryClick('Candles')} className="block py-2 px-8 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Candles</li>
                    <li onClick={() => handleSubCategoryClick('Mirrors')} className="block py-2 px-8 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Mirrors</li>
                  </ul>
                )}
                <li onClick={() => handleCategoryClick('Ornaments')} className="block py-2 px-4 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Ornaments {subView === 'Ornaments' ? '▶' : ' ▼'}</li>
                {subView === 'Ornaments' && (
                  <ul>
                    <li onClick={() => handleSubCategoryClick('Decorative Bowls')} className="block py-2 px-8 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Decorative Bowls</li>
                    <li onClick={() => handleSubCategoryClick('Sculptures')} className="block py-2 px-8 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Sculptures</li>
                    <li onClick={() => handleSubCategoryClick('Figurines')} className="block py-2 px-8 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Figurines</li>
                  </ul>
                )}
                <li onClick={() => handleCategoryClick('Plants')} className="block py-2 px-4 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Plants {subView === 'Plants' ? '▶' : ' ▼'}</li>
                {subView === 'Plants' && (
                  <ul>
                    <li onClick={() => handleSubCategoryClick('Indoor Plants')} className="block py-2 px-8 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Indoor Plants</li>
                    <li onClick={() => handleSubCategoryClick('Succulents')} className="block py-2 px-8 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Succulents</li>
                    <li onClick={() => handleSubCategoryClick('Artificial Plants')} className="block py-2 px-8 text-sm hover:bg-gray-100 hover:rounded-md cursor-pointer">Artificial Plants</li>
                  </ul>
                )}
              </ul>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">

          {view === 'Furniture' && <Furniture />}
          {/* Conditionally render based on selected subcategory */}
          {view === 'Sofas' && <Sofas />}
          {view === 'Chairs' && <Chairs />}
          {view === 'Tables' && <Tables />}


          {view === 'Wallpaper' && <Wallpaper />}
          {view === 'Patterned Wallpaper' && <PatternedWallpaper />}
          {view === 'Textured Wallpaper' && <TexturedWallpaper />}
          {view === 'Printed Wallpaper' && <PrintedWallpaper />}


          {view === 'Lighting' && <Lighting />}
          {view === 'Ceiling Lights' && <CeillingLight />}
          {view === 'Table Lamps' && <TableLamps />}
          {view === 'Floor Lamps' && <FloorLamps />}

          {view === 'Curtains' && <Curtains />}
          {view === 'Sheer Curtains' && <SheerCurtains />}
          {view === 'Blackout Curtains' && <BlackoutCurtains />}
          {view === 'Valances' && <Valances />}

          {view === 'Rugs' && <Rugs />}
          {view === 'Area Rugs' && <AreaRugs />}
          {view === 'Runner Rugs' && <RunnerRugs />}
          {view === 'Round Rugs' && <RoundRugs />}

          {view === 'Paintings' && <Paintings />}
          {view === 'Canvas Art' && <CanvasArt />}
          {view === 'Oil Paintings' && <OilPaintings />}
          {view === 'Abstract Art' && <AbstractArts />}


          {view === 'Accessories' && <Accessories />}
          {view === 'Vases' && <Vases />}
          {view === 'Candles' && <Candles />}
          {view === 'Mirrors' && <Mirrors />}

          {view === 'Ornaments' && <Ornaments />}
          {view === 'Decorative Bowls' && <DecorativeBowls />}
          {view === 'Sculptures' && <Sculptures />}
          {view === 'Figurines' && <Figurines />}

          {view === 'Plants' && <Plants />}
          {view === 'Indoor Plants' && <IndoorPlants />}
          {view === 'Succulents' && <Succulents />}
          {view === 'Artificial Plants' && <ArtificialPlants />}




          {view !== "Furniture" && view !== "Chairs" && view !== "Sofas" && view !== "Tables" && view !== "Wallpaper" && view !== "Patterned Wallpaper" && view !== "Textured Wallpaper" && view !== "Printed Wallpaper" && view !== "Lighting" && view !== "Ceiling Lights" && view !== "Table Lamps" && view !== "Floor Lamps" && view !== "Curtains" && view !== "Sheer Curtains" && view !== "Blackout Curtains" && view !== "Valances" && view !== "Rugs" && view !== "Area Rugs" && view !== "Round Rugs" && view !== "Runner Rugs" && view !== "Paintings" && view !== "Canvas Art" && view !== "Oil Paintings" && view !== "Abstract Art" && view !== "Accessories" && view !== "Candles" && view !== "Vases" && view !== "Mirrors" && view !== "Ornaments" && view !== "Decorative Bowls" && view !== "Sculptures" && view !== "Figurines" && view !== "Plants" && view !== "Indoor Plants" && view !== "Succulents" && view !== "Artificial Plants" && (<Products />)}
        </div>
      </div>
    </div>
  );
}

function UpdateProductForm() {
  return (
    <form className="bg-white shadow-md rounded-lg p-8">
      <h2 className="text-xl font-bold mb-4">Update Product</h2>
      <label className="block mb-4">
        Product ID:
        <input type="text" name="id" className="input" />
      </label>
      <label className="block mb-4">
        New Product Name:
        <input type="text" name="name" className="input" />
      </label>
      <button type="submit" className="btn-primary">Submit</button>
    </form>
  );
}

function DeleteProductForm() {
  return (
    <form className="bg-white shadow-md rounded-lg p-8">
      <h2 className="text-xl font-bold mb-4">Delete Product</h2>
      <label className="block mb-4">
        Product ID:
        <input type="text" name="id" className="input" />
      </label>
      <button type="submit" className="btn-primary">Delete</button>
    </form>
  );
}

export default AllProductsLayout;
