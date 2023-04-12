import React from 'react';
import './SearchRes.css';
import Product from './Product';
import { useSelector } from 'react-redux';
import { cartAdd } from './actions/cartAction';
import { useDispatch } from 'react-redux';

function SearchRes() {

    const items = useSelector(state => state.searchReducer.sar);

    return (
    <div className="Searchmain">
        <div className="Searchno">
        {(items.length===0)? <p>Item not found!</p> : <p>Search result</p>}
        </div>
        {(items.length!==0)?<div className='SearchRes'> 
            {items.map(x => 
                    <Product key={x.id}
                    id={x.id}
                    title={x.title}
                    cost={x.cost}
                    rating={x.rating}
                    img={x.img}
                    /> )}
        </div>:""}
    </div>
    )
}

export default SearchRes