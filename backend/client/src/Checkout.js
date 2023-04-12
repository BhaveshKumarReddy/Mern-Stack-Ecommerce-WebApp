import React,{useEffect} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Checkoutitem from './Checkoutitem';
import './Checkout.css';
import { cartAdd } from './actions/cartAction';
import { useHistory } from "react-router-dom";
import { cartEmpty } from './actions/cartAction';

function Checkout() {

    const cart = useSelector(state => state.cartReducer.items);
    const userDet = useSelector(state => state.loginReducer.user); 
    const si = useSelector(state => state.loginReducer.notlogin); 

    const history = useHistory();
    const dispatch = useDispatch();

    const cost = cart.map(item => item.cost)
    const curcost = cost.reduce((prev,cur) => prev+cur,0) 

    useEffect(() => { 
        if(si){
        axios.post("http://localhost:5000/ecom/fetchCart",userDet)
            .then(res => { 
                dispatch(cartAdd(res.data));
            })
            .catch(error => console.log("Error getting")); 
        }
    },[]); 

    const butPushup = () => { 
        const od = {
            email : userDet.email,
            password : userDet.password,
            cart : [...cart]
        }
        axios.post("http://localhost:5000/ecom/addOrders",od)
        .then(res => {
            console.log(res.data);
        })
        .catch(error => console.log("Error pushing orders")); 
        dispatch(cartEmpty());
        history.push("/myorders");
        alert("Yayyyy!!! 🚀\nYour order is confirmed!");
        window.scrollTo(0,-1000); 
    }  

    return ( 
        <div className='checkout'> 
            {cart.length !== 0 ? (
                <div className='co-cart'>
                   <div className='sec-devider'> 
                        <div className='cart-head'>
                           <h2>Your Cart</h2>
                        </div>
                        <div className='payment'>
                            <p>Subtotal  ---  ₹{curcost} </p>
                            <button onClick={() => butPushup()} >Proceed to Checkout</button>
                        </div>
                   </div> 
                    <div className='ço-cart-body'>
                         {cart.map(item => (
                            <Checkoutitem key={item.id}
                            id={item.id}
                            title={item.title}
                            cost={item.cost}
                            rating={item.rating}
                            img={item.img} />
                         )) }
                    </div>
                </div>
            ) : (
            <div className='cono-cart'>
              {/* <h1>Your Cart is empty !</h1> */}
              <img className='ço-ca-img' src='https://i.pinimg.com/originals/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.png' />
            </div>
                )}
        </div>
    )
}

export default Checkout;