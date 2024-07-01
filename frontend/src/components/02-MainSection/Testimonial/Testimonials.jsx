import React from 'react';
import Reviews from '../../02-MainSection/Testimonial/Reviews';
import customer1 from '../../../assets/Customers-img/Eshu.jpg';
import customer2 from '../../../assets/Customers-img/Devraj.jpg';
import customer3 from '../../../assets/Customers-img/jyoti.jpg';
import customer4 from '../../../assets/Customers-img/syama.jpg';
import './Testimonials.css';

function Testimonials() {
    return (
        <div className='testimonial-container'>
            <h1>What Customer says about us !</h1>
            <div className='t-container-elements'>
                <Reviews name="Atisha Jena" image={customer1} location="Bhubaneswar, Odisha" />
                <Reviews name="Devraj Malik" image={customer2} location="Cuttack, Odisha" />
                <Reviews name="Jyoti Ranjan Panda" image={customer3} location="Baleswar, Odisha" />
                <Reviews name="Shyama Sunder Sahu" image={customer4} location="Angul, Odisha" />

            </div>
        </div>
    );
}

export default Testimonials;
