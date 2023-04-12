import React from 'react'
import {Link} from 'react-router-dom'

function Payment() {
    return (
        <div style={{padding:"10px"}} className='payment-body'>
            <h3 className='payment-body-heading'>Dear user, sorry for the inconvenience!</h3>
            <p>Our developers are working on it 😀 </p>
            <Link style={{color:"black",backgroundColor:"silver",padding:"10px",maxWidth:"69%"}} className='header-logo-link' to='/'>
                <span style={{padding:"10px",fontWeight:'bolder'}} className='h-n-l-twospan'>Go to home</span>
            </Link>
        </div>
    )
}

export default Payment;