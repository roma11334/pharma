import React from 'react';
import styles from './Slider.module.css'

const Slider = () => {
    return (
        <section className={styles.slider}>
            <div className="container">
                <div className={styles.sliderInner}>
                <h2 className={styles.sliderTitle}>Кращі товари для твого тіла</h2>
                </div>
            </div>
        </section>
);
};

export default Slider;