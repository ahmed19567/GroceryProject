import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import produce from './public/fresh-produce.png'
 
function Footer() {
    return (
        <div className='footer-wrapper'>
            <div className="footer">

                <div className="footer1">
                    <div className="foot1">
                        <img src={produce} alt=""/>
                    </div>
                    <div className="foot1_pt2">
                        <ul>
                            <li>About Us</li>
                            <li>FAQ'S</li>
                            <li>Join US</li>
                        </ul>
                    </div>
                </div>
                <div className="footer2">
                    <span>Fresh Produce, 2022 All right reserved</span>
                    <div className="icon">
                        <FaYoutube className='ic'/>     
                        <FaFacebookF className='ic'/>
                        <FaTwitter className='ic'/>
                        <FaInstagram className='ic'/>
                    </div>
                </div>

         
            </div>
        </div>
    )
}

export default Footer
