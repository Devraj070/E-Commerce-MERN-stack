import React from 'react'
import Slider from './Slider'
// import Products from '../01-HeaderSection/Navbar/Product/Products'
// import About from '../01-HeaderSection/Navbar/About'
// import ContactUs from '../01-HeaderSection/Navbar/ContactUs'
// import WeOffer from '../01-HeaderSection/Navbar/WeOffer'
import Footer from '../03-FooterSection/Footer'
// import Navbar from '../01-HeaderSection/Navbar/Navbar'
// import WeOffer from '../01-HeaderSection/Navbar/WeOffer/WeOffer'
// import Offers from '../01-HeaderSection/Navbar/WeOffer/Offers'
// import NavbarMini from '../01-HeaderSection/NavbarMini/NavbarMini'
import Card from '../02-MainSection/Cards/Card'
import BestCollections from './Cards/bestCollections/BestCollections'

import Testimonials from './Testimonial/Testimonials'

function All() {
    return (
        <div>
            <div><Slider /></div>
            <div><Card /></div>
            {/* <div><BestCollections /></div> */}
            <div><Testimonials /></div>
            {/* <div><About/></div> */}
            {/* <div><ContactUs/></div> */}
            <div><Footer /></div>
        </div>

    )
}

export default All