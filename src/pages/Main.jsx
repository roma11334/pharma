import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Content from '../components/Content/Content';
import Search from '../components/Search/Search';
import Pagination from '../components/Pagination/Pagination';

const Main = () => {
    return (
        <div>
            <Header/>
            <Content/>
            <Pagination/>
            <Footer/>
        </div>
    );
};

export default Main;