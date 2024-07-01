import React from 'react';
import Navbar from './components/01-HeaderSection/Navbar/Navbar';
import NavbarMini from './components/01-HeaderSection/NavbarMini/NavbarMini';
import About from './components/01-HeaderSection/Navbar/About';
import Offers from './components/01-HeaderSection/Navbar/WeOffer/Offers';
import ContactUs from './components/01-HeaderSection/Navbar/ContactUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import All from './components/02-MainSection/All';
import Products from './pages/Product/Products';
import OneProductDetails from './pages/Product/OneProductDetails'
import AdminDashboard from './Admin/AdminDashboard';
import AllProductsLayout from './pages/Product/AllProductsLayout';
import SearchResults from './pages/Search page/SearchResult'
///sub-products--->
import InteriorDesign from './pages/mini-navbar-products/Interior Design/InteriorDesign';
import Furniture from './pages/mini-navbar-products/Furnitures/Furnitures';
import Wallpaper from './pages/mini-navbar-products/Wallpaper/Wallpaper';
import Lighting from './pages/mini-navbar-products/Lighting/Lighting';
import Curtains from './pages/mini-navbar-products/Curtains/Curtains';
import Rugs from './pages/mini-navbar-products/Rugs/Rugs';
import Paintings from './pages/mini-navbar-products/Paintings/Painting';
import Accessories from './pages/mini-navbar-products/Accessories/Accessories';
import Ornaments from './pages/mini-navbar-products/Ornaments/Ornaments';
import Plants from './pages/mini-navbar-products/Plants/Plants';
///sub-products    <------

import CartPage from './pages/cart/CartPage';
import CheckoutPage from './pages/cart/CheckoutPage';
import ThankYouPage from './pages/cart/ThankYouPage';
import MyOrdersPage from './pages/MyOrder/MyOrder';
import BuyNowCheckOut from './pages/cart/BuyNowCheckOut';
import ErrorPage from './pages/ErrorPage';






function App() {

  const dynamicProductRoutes = [
    { path: '/products/interior/design', Component: InteriorDesign },
    { path: '/products/furniture', Component: Furniture },
    { path: '/products/wallpaper', Component: Wallpaper },
    { path: '/products/lighting', Component: Lighting },
    { path: '/products/curtains', Component: Curtains },
    { path: '/products/rugs', Component: Rugs },
    { path: '/products/paintings', Component: Paintings },
    { path: '/products/accessories', Component: Accessories },
    { path: '/products/ornaments', Component: Ornaments },
    { path: '/products/plants', Component: Plants }
  ];

  return (
    <Router>
      <div>
        <Navbar />
        <div><NavbarMini /></div>
        <div className='main-container'>
          <Routes>
            <Route path='/' element={<All />} />
            <Route path='/admin' element={<AdminDashboard />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path='/products' element={<AllProductsLayout />} />
            <Route path='/all-products' element={<Products />} />
            <Route exact path='/weoffer' element={<Offers />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contactus' element={<ContactUs />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/orders' element={<MyOrdersPage />} />
            <Route path="*" element={<ErrorPage />} />

            <Route path='/ty' element={<ThankYouPage />} />

            <Route path='/checkout' element={<CheckoutPage />} />
            <Route path='/BuyNowCheckOut' element={<BuyNowCheckOut />} />


            <Route exact path='/product/:id' element={<OneProductDetails />} />
            {/* dynamic products routes */}
            {dynamicProductRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Routes>
        </div>
        {/* <div><Footer /></div> */}
      </div>
    </Router>
  );
}

export default App;
