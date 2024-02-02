import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './BreadCrumbs.module.css'
import qs from 'qs'
import { useSelector } from 'react-redux';

const BreadCrumbs = () => {
    const navigate = useLocation()
    const {item} = useSelector((state) => state.goodsReducer)
    return (
        <div className='container'>
            <ul className={styles.box}>
                <li className={styles.item}>
                    <Link to='/'> Головна </Link>
                </li>
                {navigate.pathname === '/cart' && <li className={styles.item}>
                                <Link>| Корзина</Link>
                            </li>}
                {(Object.keys(item).length !== 0 && navigate.pathname !== '/cart') && <li>
                            <Link>| {item.title}</Link>
                        </li>}
            </ul>
        </div>
    );
};

export default BreadCrumbs;