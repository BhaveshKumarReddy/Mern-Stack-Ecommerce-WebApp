import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';


function Footer() {
    return (
        <div className='ftr-container'> 
            <div>
 
            </div>
            <div className='ftr-cont-box'>
                <a className='ftr-cont-link' href='https://instagram.com/bikerbhavesh'>
                    <InstagramIcon />
                </a>
                <a className='ftr-cont-link' href='https://www.facebook.com/bhavesh.reddy.5473'>
                    <FacebookIcon />
                </a>
                <a className='ftr-cont-link' href='https://www.linkedin.com/in/bhavesh-kumar-reddy-b97b1b1a7/'>
                    <LinkedInIcon />
                </a> 
                <a className='ftr-cont-link' href='https://twitter.com/KarnatiBhavesh'>
                    <TwitterIcon />
                </a>
            </div>
        </div>
    )
}

export default Footer
