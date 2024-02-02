import React from 'react';
import styles from './Pagination.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setActivePage } from '../store/slices/goodsSlice';

const Pagination = () => {
    const {allGoods, activePage} = useSelector((state) => state.goodsReducer)
    const dispatch = useDispatch()
 
    let pages = []

    for(let i = 0; i < Math.ceil(allGoods.length / 6); i++){
        pages.push(i+1)
    }


    return (
        <div className={styles.pagination}>
            {pages.map(el => 
                <span className={activePage === el ? styles.active : ''} key={el} onClick={() => dispatch(setActivePage(el))} >{el}</span>
                )}
        </div>
    );
};

export default Pagination;