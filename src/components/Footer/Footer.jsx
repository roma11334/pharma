import React from 'react';
import styles from './Footer.module.css'
import stHeader from '../Header/Header.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
            <div className={styles.footerInner}>
                <div className={styles.contacts}>
                <a className={stHeader.logo} href="#">
                    PHARMA.COM
                </a>  
                <a href="#" className={styles.phone}>+38-(066)-55-55-612</a>
                <a href="" className={styles.email}>pharma@gmail.com</a>
                </div>
            </div>
            </div>
        </footer>
    );
};

export default Footer;