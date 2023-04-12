import React,{useState} from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';   
import { useHistory } from 'react-router';
import { cartOrd } from './actions/cartAction';
import { logAdd, loginAdd } from './actions/loginAction';
import './Login.css'; 
 
function Signup() { 
  const [used, setUsed] = useState(false);
  const [peye, setPeye] = useState(false);
  const [cpeye, setCpeye] = useState(false); 

  const userDet = useSelector(state => state.loginReducer.user); 
  const userLog = useSelector(state => state.loginReducer.notlogin);   

  const dispatch = useDispatch();            
  const history = useHistory();            

  const {register,handleSubmit,watch, formState:{errors}} = useForm({reValidateMode:'onChange'});
  
  const cp = watch("password",'');             

  const changePeye = () =>{
    setPeye(!peye);
  }
  const changeCpeye = () =>{    
    setCpeye(!cpeye);
  }  
  const onSubmit = (data) => {
    axios.post('http://localhost:5000/ecom/add',data).then(res => { 
      if(res.data)
      {
        setUsed(false);
        dispatch(logAdd(data.email,data.password)); 
        dispatch(loginAdd(true));//true means logged in
        history.push("/login"); 
      }
      else
      {
        setUsed(true);
      }
    }).catch(err => console.log("error "+err));
  } 

  return (
    <div className='sect-main-div'> 
        <div className='leftrrow'>
           <img className='leftrrowimg' src='https://img.freepik.com/free-psd/teal-color-headphone-brand-product-social-media-post-banner_154386-100.jpg?size=626&ext=jpg&ga=GA1.2.1719178491.1616889600' />
        </div>
        <div className='bgg-form'>   
           <form className='formfff' onSubmit={handleSubmit(onSubmit)} >
          
              <label>Your Full Name</label> 
              <input  placeholder='Enter Your Full Name' type='text' {...register('fullname',{required:true})}  />
              {errors.fullname && <p className='error'>
              <i className="fas fa-exclamation-circle"></i>Full name is required</p>}
              
              <label>Your Email Address</label>
              <input   placeholder='Enter Email Address' type='email'  {...register('email',{required:true})}   />
              {errors.email && <p className='error'><i className="fas fa-exclamation-circle"></i> Email is required</p>}
              {used?<p className='error'><i className="fas fa-exclamation-circle"></i>Already used! change email and try</p>:""}

              <label>Password</label>
              <div><input  type={peye?'text':'password'}  placeholder='Enter Password'  {...register('password',{required:true,
                 pattern : { 
                 value : /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*[!@#$%^&*_-]).{8,}$/ ,   
                 message: "Your password must have at least 8 characters, one of each of the following: uppercase character (A-Z), lowercase character (a-z), digit (0-9), and symbol (any non-alphanumeric character)", 
             } 
             })} />{peye?<i onClick={changePeye} className="fas fa-eye"></i>:<i onClick={changePeye} className="fas fa-eye-slash"></i>}</div>
              {errors.password?.type === "pattern" && <p className='error'> 
              <i className="fas fa-exclamation-circle"></i>{errors.password.message}  
              </p>}
              {errors.password?.type === "required" && <p className='error'>
              <i className="fas fa-exclamation-circle"></i>Password is required
              </p>}

              <label>Confirm password</label>
              <div><input   placeholder='Confirm your password' type={cpeye?'text':'password'}  {...register('confirmPassword',{required:true,
                      validate : value => value === cp || "Did not match" ,
              })}/>{cpeye?<i onClick={changeCpeye} className="fas fa-eye"></i>:<i onClick={changeCpeye} className="fas fa-eye-slash"></i>}</div>
              {errors.confirmPassword?.type === "validate" && <p className='error'>
              <i className="fas fa-exclamation-circle"></i>{errors.confirmPassword.message}
              </p>}
              {errors.confirmPassword?.type === "required" && <p className='error'>
              <i className="fas fa-exclamation-circle"></i>Confirm your password
              </p>}

              <button >SignUp</button>
           </form>
        </div>
    </div>
  )
}

export default Signup;