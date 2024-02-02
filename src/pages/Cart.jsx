import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Slider from '../components/Slider/Slider';
import CartComponent from '../components/Cart/CartComponent';

const Cart = () => {
    return (
        <div>
            <div className="container">
                <CartComponent/>
            </div>
        </div>
    );
};

export default Cart;