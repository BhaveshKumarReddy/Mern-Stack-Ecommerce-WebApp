import { Star } from '@material-ui/icons';
import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cartAdd } from './actions/cartAction';
import  "./Checkoutitem.css";
import { cartDel } from './actions/cartAction'

function Checkoutitem({id,title,rating,cost,img}) {

   const dispatch = useDispatch();

   const userDet = useSelector(state => state.loginReducer.user); 

   const delCart = () =>{
        const od = {
            email : userDet.email,
            password : userDet.password,
            id : id
        }
        axios.post("http://localhost:5000/ecom/delItem",od)
        .then(res => { 
            getCarts(od);
        })
        .catch(error => console.log("Error getting"));
   }

   const getCarts = (od) =>{
        axios.post("http://localhost:5000/ecom/fetchCart",od)
        .then(res => { 
            dispatch(cartAdd(res.data));
        })
        .catch(error => console.log("Error getting")); 
   }

    return (
        <div className='Checkoutitem-box' key={id}>
           <div> 
                <img src={img} />
           </div>
           <div className='cout-bdy'>
                <p className='cout-bdy-p'>{title}</p>
                <div className='cout-bdy-rating'>
                    { Array(rating) 
                       .fill()
                       .map((_) =>(
                                 <p><Star className='stars-ck' /></p>))
                    }
                </div>
                <div className='fnal-ck'>
                    <p className='f-ck-p'>₹{cost}</p>
                    <button className='f-ck-but' onClick={()=>delCart()} >Remove item</button>
                </div>
            </div>
        </div>
    )
}

export default Checkoutitem