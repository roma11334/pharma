import React, { useEffect, useRef, useState } from 'react';
import styles from './Goods.module.css'
import Skeleton from '../Skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { clearItem, fetchAllGoods, fetchGoods, setFilters} from '../store/slices/goodsSlice';
import qs from 'qs';
import { Link, useNavigate } from 'react-router-dom';
import { setAnimate, setCartItem } from '../store/slices/cartSlice';


const Goods = () => {

    const skeleton = [1,2,3]

    const {goods, activeCategory, search, activePage, status} = useSelector((state) => state.goodsReducer)
    const {animate} = useSelector((state) => state.cartSlice)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const isSearch = useRef(false)
    const isMounted = useRef(false)

    useEffect(() => {
        dispatch(fetchAllGoods())
        dispatch(clearItem())

        if (window.location.search){
            const newSearch = qs.parse(window.location.search.slice(1))
            dispatch(
                setFilters({...newSearch})
            )
            isSearch.current = true
        }
    }, [])

    useEffect(() => {
        if(!isSearch.current){
            const categoryGet = activeCategory ? `&category=${activeCategory}` : ''
            const searchGet = search ? `&search=${search}` : ''

            dispatch(fetchGoods({activePage, searchGet, categoryGet}))
            
        }
        isSearch.current = false
        
    },[activeCategory, search, activePage])

    useEffect(() => {
        if(isMounted.current){
            const queryString = qs.stringify({
                activeCategory,
                activePage
            })
            navigate(`?${queryString}`)
        }
       isMounted.current = true
    }, [activeCategory, activePage])

    const addToCart = (item) => {
        dispatch(setCartItem(item))
        setTimeout(() => {
            dispatch(setAnimate())
        },1000)
    }

    if(status === 'error'){
        return (
            <div>Error</div>
        )
    }

    return (
        
        <div className={styles.items}>
            
            {status === 'loading' && skeleton.map((res,i) => <Skeleton key={i}/>)}
                       
            {status === 'success' && goods.map(item => 
                                    <div key={item.id} className={styles.item}>
                                        <Link to={`/items/${item.id}`}> 
                                            <img className={styles.itemImg} src={`./images/${item.img}`} alt=""/>  
                                        </Link>
                                        {animate && <img  className='cartAnimation' src={`./images/${animate}`} alt=""/>}
                                        <Link to={`/items/${item.id}`}> 
                                            <h2 className={styles.itemTitle}>{item.title}</h2>
                                        </Link>
                                        <span className={styles.itemPrice}>{item.price} грн</span>
                                        <button onClick={() => addToCart(item)} className={styles.itemBtn}>Купити</button>
                                    </div>
                                    )}
            
        </div>
    );
};

export default Goods;