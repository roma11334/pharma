import React from 'react';
import Header from '../components/Header/Header';
import Slider from '../components/Slider/Slider';
import Footer from '../components/Footer/Footer';

const Contacts = () => {
    return (
        <div>
            <Header/>
            <Slider/>
            <div className="container">
                <h1>Contacts</h1>
            </div>
            <Footer/>
        </div>
    );
};

export default Contacts;