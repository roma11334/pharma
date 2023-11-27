import React, { useState } from 'react';
import styles from './Menu.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCategory } from '../store/slices/goodsSlice';

const Menu = () => {

    const activeCategory = useSelector((state) => state.goodsReducer.activeCategory)
    const dispatch = useDispatch()

    const categories = [
        {
          "key": "",
          "name": "Усе"
      },
      {
          "key": "testosteron",
          "name": "Тестостерон"
      },
      {
          "key": "trenbolon",
          "name": "Тренболон"
      },
      {
          "key": "gormon",
          "name": "Гормон росту"
      },
      {
          "key": "turinabol",
          "name": "Турінабол"
      },
      {
        "key": "masteron",
        "name": "Мастерон"
      }
      ]

    return (
        <div className={styles.menu}>
            <h2 className={styles.menuTitle}>Спортивна фармакологія</h2>
            <ul className={styles.menuItems}>
                {categories.map((el,i) =>
                        <li key={i} className={styles.menuItem}>
                            <a 
                                className = {activeCategory == el.key ? styles.active : styles.menuLink}
                                onClick={() => dispatch(setActiveCategory(el.key))}
                                >{el.name}</a>
                        </li>
                    )}
                
            </ul>
        </div>
    );
};

export default Menu;