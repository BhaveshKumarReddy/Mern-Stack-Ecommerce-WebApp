import React from 'react';
import axios from 'axios';
import './Itemopen.css'
import { useDispatch, useSelector } from 'react-redux';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useHistory } from 'react-router';
import { Star } from '@material-ui/icons';
import { cartAdd } from './actions/cartAction';
import Reviews from './Reviews';

function Itemopen() {

    const history = useHistory();
    const dispatch = useDispatch();

    const userDet = useSelector(state => state.loginReducer.user); 
    const si = useSelector(state => state.loginReducer.notlogin);   
    const oi = useSelector(state => state.openItemReducer.item);

    const backGo = () => {
        history.push("/");
        window.scrollTo(0,-1000); 
    }

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
            item : [oi],
            id : oi.id,
        }
        axios.post("http://localhost:5000/ecom/addCart",od)
        .then(res => {
            console.log(res.data);
            getCart();
        })
        .catch(error => console.log("Error pushing orders"));
        }
        else{
        alert("Dear user😀, \nPlease login to add the item to the cart");
    }
    } 


    return (
        <div className='totalopenitembox' key={oi.id}>
            <div className='leftbackbutbox1' onClick={()=>backGo()}>
                <button className='butkbsicon'><KeyboardBackspaceIcon className='kbsicon'/></button>
            </div>
            <div className='leftopenitembdy'> 
                <img src={oi.img} />
            </div>
            <div className='rightopenitembdy'>
              <div className='rightopenitembdy-box'>  
                <p className='roib-title'>{oi.title}</p>
                <p className='last-roib-title'>{ Array(oi.rating)  
                       .fill()
                       .map((_) =>(
                                 <p><Star className='p-star-p-p' /></p>))
                    }</p>  
                <div className='fnl-lst-dwn-bx'>    
                <span>₹{oi.cost}</span> 
                <button onClick={()=>cartAdder()}>Add to Cart</button>
                </div>
              </div>
              <div className='Review-open'>
                <Reviews id={oi.id}/>
              </div>
            </div>
        </div>
    )
}

export default Itemopen;
