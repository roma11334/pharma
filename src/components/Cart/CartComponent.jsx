import React from 'react';
import styles from './Cart.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, decCount, incCount, removeItem } from '../store/slices/cartSlice';
import { Link } from 'react-router-dom';

const CartComponent = () => {
    const {cartItems, sumItems} = useSelector((state) => state.cartSlice)
    const totalCount = cartItems.reduce((acc, el) => acc + el.count, 0)
    const dispatch = useDispatch()

    return (
        <div className={styles.cartInner}>
            
            <div className={styles.box}>
            <div className={styles.headBox}>
                <h1 className={styles.title}>
                    <img src="./images/cart.png" alt="" />
                    Корзина</h1>
                <a onClick={() => dispatch(clearCart())} className={styles.clear}>
                    <img src="./images/clear.png" alt="" />
                    Очистити корзину</a>
            </div>  
            {cartItems.map(item => 
                <div className={styles.item}>
                    <img className={styles.itemImg} src={`./images/${item.img}`} alt=""/>
                    <h2 className={styles.itemTitle}>{item.title}</h2>
                    <span className={styles.countBox}>
                        <a onClick={() => dispatch(decCount(item))} className={styles.countBtn}>-</a>
                        <span className={styles.count}>{item.count}</span>
                        <a onClick={() => dispatch(incCount(item))} className={styles.countBtn}>+</a>
                    </span>
                    <span className={styles.itemPrice}>{item.price} грн</span>
                    <button onClick={() => dispatch(removeItem(item))} className={styles.itemBtn}>Видалити</button>
                </div>
                )}
            
                {cartItems.length === 0 && <div className={styles.empty}>Корзина пуста</div>}
                <div className={styles.bottomBox}>
                    <Link to="/" className={styles.back}>Повернутись назад</Link>
                    {
                        cartItems.length > 0 && 
                        <>
                            <a className={styles.bottomItem}>Всього: {totalCount}</a>
                            <a className={styles.bottomItem}>Сумма замовлення: {sumItems} грн</a>
                            <a className={styles.submit}>Замовити</a>
                        </>
                    }
                </div>
                              
            </div>
        </div>
    );
};

export default CartComponent;
