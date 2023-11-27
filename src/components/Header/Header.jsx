import React, { useState } from 'react';
import styles from './Header.module.css'
import { Link } from 'react-router-dom';
import Search from '../Search/Search';

const Header = () => {
    const [menuBtn, setMenuBtn] = useState(false)
    const newMenu = menuBtn ? [styles.nav, styles.show].join(' ') : styles.nav

    return (
        <header className={styles.header}>
            <div className="container">
                <nav className={newMenu}>
                    <Link className={styles.logo} to="/">PHARMA.COM</Link>
                   
                    <ul className={styles.menu}>
                        <li className={styles.menuItem}>
                            <Link to="/about" className={styles.menuLink}>Про нас</Link>
                        </li>
                        <li className={styles.menuItem}>
                            <Link to="/sales" className={styles.menuLink}>Акції</Link>
                        </li>
                        <li className={styles.menuItem}>
                            <Link to="/contacts" className={styles.menuLink}>Контакти</Link>
                        </li>
                        <li className={styles.menuItem}>
                            <Link to="/delivery" className={styles.menuLink}>Доставка</Link>
                        </li>
                    </ul>
                    <Link className={styles.cart} to="/cart">
                            <img src="images/cart.svg" alt="" />
                            <span>1</span>
                        </Link>
                    <button onClick={() => setMenuBtn(!menuBtn)} className={styles.menuBtn}>
                        <span></span><span className={styles.btnLine}></span><span></span>
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;