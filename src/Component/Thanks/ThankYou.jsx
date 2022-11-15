import React from 'react'
import './thanks.css'
import {Link} from 'react-router-dom'


function ThankYou() {
    var currentdate = new Date(); 
    var datetime = "Last Sync: " + 
                    + (currentdate.getMonth()+1)  + "/" +
                    currentdate.getDate() + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
    


    return (
        <div className='thanks_wrapper'>
            <div className="thanks"> 
            <h2>Thank you for your order</h2>
             <h3>Order number : {Math.floor(Math.random() * 1000)+1}</h3>
            <h4>{datetime}</h4>
            <Link to='/' className='shopping_back'> Go shopping</Link>
            </div>
        </div>
    )
}

export default ThankYou
