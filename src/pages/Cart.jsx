import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Slider from '../components/Slider/Slider';

const Cart = () => {
    return (
        <div>
            <Header/>
            <Slider/>
            <div className="container">
                <h1>KORZINAA</h1>
            </div>
            <Footer/>
        </div>
    );
};

export default Cart;