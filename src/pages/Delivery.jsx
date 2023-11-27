import React from 'react';
import Header from '../components/Header/Header';
import Slider from '../components/Slider/Slider';
import Footer from '../components/Footer/Footer';

const Delivery = () => {
    return (
        <div>
            <Header/>
            <Slider/>
            <div className="container">
                <h1>Delivery</h1>
            </div>
            <Footer/>
        </div>
    );
};

export default Delivery;