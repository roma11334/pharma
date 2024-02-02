import React, { useCallback, useEffect, useState } from 'react';
import styles from './Search.module.css'
import { useDispatch, useSelector } from 'react-redux';
import {setSearch} from '../store/slices/goodsSlice'
import debounce from 'debounce';

const Search = () => {
    const search = useSelector((state) => state.goodsReducer.search)
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        dispatch(setSearch('')) //сбрасываем поиск после перехода на другую страницу или категорию
    },[])

    const debounceInput = useCallback(
        debounce((e) => {
            dispatch(setSearch(e.target.value))
        }, 250),
        [],
    )

    const onChangeInput = (e) =>{
        setInputValue(e.target.value)
        debounceInput(e)
    }

    return (
        <div className={styles.search}>
            <input 
                value={inputValue}
                onChange={(e) => onChangeInput(e)}
                className={styles.searchInput} 
                placeholder="Пошук по магазину..." 
                type="text"/>
            <button className={styles.searchBtn}>
                <img className={styles.searchImg} src="images/search.svg" alt=""/>
            </button>
        </div>
    );
};

export default Search;