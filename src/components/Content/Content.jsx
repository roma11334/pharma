import React from 'react';
import Slider from '../Slider/Slider';
import Menu from '../Menu/Menu';
import Goods from '../Goods/Goods';
import Search from '../Search/Search';
import { useSelector } from 'react-redux';

const Content = () => {
    const {activeCategory} = useSelector((state) => state.goodsReducer)
    return (
        <main className="main">
            <section className="main__page">
                <div className="container">
                {activeCategory === "" && <Search/>}
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