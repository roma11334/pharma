import React from 'react';
import Slider from '../Slider/Slider';
import Menu from '../Menu/Menu';
import Goods from '../Goods/Goods';
import Search from '../Search/Search';

const Content = () => {
    return (
        <main className="main">
            <Slider/>
            <section className="main__page">
                <div className="container">
                <Search/>
                    <div className="main__page-inner">
                        <Menu/>
                        <Goods/>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Content;