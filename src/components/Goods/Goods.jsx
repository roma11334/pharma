import React, { useEffect, useState } from 'react';
import styles from './Goods.module.css'
import axios from 'axios';
import Skeleton from '../Skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { setAllGoods, setGoods } from '../store/slices/goodsSlice';
import Search from '../Search/Search';
import debounce from 'debounce';

const Goods = () => {

    const [isLoading, setIsLoading] = useState(true)
    const skeleton = [1,2,3]

    const {goods, activeCategory, search, activePage} = useSelector((state) => state.goodsReducer)
    const dispatch = useDispatch()

    

    useEffect(() => {
        const categoryGet = activeCategory ? `&category=${activeCategory}` : ''
        const searchGet = search ? `&search=${search}` : ''
        
        setIsLoading(true)

        axios.get(`https://65637ea2ee04015769a74a85.mockapi.io/drugs`)
            .then(res =>  {
                dispatch(setAllGoods(res.data))
            })
        

        axios.get(`https://65637ea2ee04015769a74a85.mockapi.io/drugs?page=${activePage}&limit=6` + categoryGet + searchGet)
            .then(res =>  {
                dispatch(setGoods(res.data))
                setIsLoading(false)
            })
    },[activeCategory, search, activePage])


    return (
        <div className={styles.items}>
            {isLoading ? skeleton.map((res,i) => <Skeleton key={i}/>)
                       :
                        goods.map(item => 
                            <div key={item.id} className={styles.item}>
                                <img className={styles.itemImg} src={`./images/${item.img}`} alt=""/>
                                <h2 className={styles.itemTitle}>{item.title}</h2>
                                <span className={styles.itemPrice}>{item.price} грн</span>
                                <button className={styles.itemBtn}>Купити</button>
                            </div>
                            )}
        </div>
    );
};

export default Goods;