import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchItem } from "../../components/store/slices/goodsSlice";
import styles from "./Item.module.css";
import Skeleton from "../../components/Skeleton"
import { setAnimate, setCartItem } from "../../components/store/slices/cartSlice";

const Item = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { item, status } = useSelector((state) => state.goodsReducer);
  const {animate} = useSelector((state) => state.cartSlice)

  useEffect(() => {
    dispatch(fetchItem(id));
  }, []);

  const addToCart = (item) => {
    dispatch(setCartItem(item))
    setTimeout(() => {
        dispatch(setAnimate())
    },1000)
}

  return (
    <div>
      <div className="container">
        <div className={styles.box}>
            <div className={styles.boxInner}>
            {status === 'loading' ? 
                        <Skeleton/> :
                        <>
                        <img
                          className={styles.itemImg}
                          src={`../images/${item.img}`}
                          alt=""
                        />
                <div className={styles.inner}>
                    <h2 className={styles.title}>{item.title}</h2>
                    <span>{item.price} грн</span>
                    {animate && <img  className='cartAnimation' src={`/images/${animate}`} alt=""/>}
                    <button 
                      className={styles.itemBtn}
                      onClick={() => addToCart(item)}
                      >Купити</button>
                </div> </>}
            </div>
            <div className={styles.desc}>
                <h1 className={styles.title}>Опис:</h1>
                <div className={styles.description}>
                    {item.desc}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
