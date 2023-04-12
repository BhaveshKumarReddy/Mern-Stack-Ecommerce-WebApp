import { Button } from '@material-ui/core'
import { Star } from '@material-ui/icons'
import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import './Product.css'; 
import { cartAdd } from './actions/cartAction';
import { openitemAdd } from './actions/openItemaction';
 
function Product({id,title,rating,cost,img}) {

    const userDet = useSelector(state => state.loginReducer.user); 
    const si = useSelector(state => state.loginReducer.notlogin);   

    const dispatch = useDispatch();
    const history = useHistory();

    const getCart = () =>{
        axios.post("http://localhost:5000/ecom/fetchCart",userDet)
        .then(res => { 
            dispatch(cartAdd(res.data));
        }).catch(error => console.log("Error getting"));
    }
    
    const cartAdder = () =>{
        if(si){
        const od = {
            email : userDet.email,
            password : userDet.password,
            item : [{id,title,rating,cost,img}],
            id : id,
        }
        axios.post("http://localhost:5000/ecom/addCart",od)
            .then(res => {
                console.log(res.data);
                getCart();
            }).catch(error => console.log("Error pushing orders"));
        }
        else{
            alert("Dear user 😀, \nPlease login to add the item to the cart");
        }
    } 
    
    const openItem = () =>{
        history.push("/openitem");
        dispatch(openitemAdd(id,title,rating,cost,img));    
        window.scrollTo(0,-1000); 
    }
 
    return (
        <div className='product' key={id}>
            <div onClick={()=>openItem()}> 
            <div className='pr-top'>
            <p className='product-title'>{title}</p>
                <div className='product-rating'>
                    { Array(rating)  
                       .fill()
                       .map((_) =>(
                                 <p><Star className='p-r-p' /></p>))
                    }
                </div>
            </div>
            <div className='pr-cen'>
                <img className='product-image' src={img} />
            </div>
            </div>
            <div className='product-down'>
                <p className='product-cost'>₹{cost}</p>
                <button className='product-button' onClick={()=>cartAdder()}>Add to cart</button>
            </div>
        </div>
    )
}

export default Product