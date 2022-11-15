import React from 'react'
import { useState, useEffect } from 'react'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'


import Payment from '../Payment/Payment'
import './checkout.css'
function Checkout({cart,addtoCart,removeFromCart}) {
    
    const[data, setData] = useState([])
    const[amount, setAmount] = useState(0)
    const stripePromise = loadStripe('pk_test_51JCQb3IinMHHNUJ9qST7ZuWCd8v2AKwnuOvS7UhyHcMCescqQ5kJfpg30r2LTkli6U30Fgpv1k3pNmgBnTo7drG900zuIaTZ4q')

    const getCart = JSON.parse(localStorage.getItem('cart'))
    
    function calculateAmount(){
        if(data){
            const amount =  data.reduce((prev, current)=>{
                return prev + (current.price * current.qty)
            },0)
            return amount;
        }
        
     
    }   
      useEffect(()=>{
         const totalAmount = calculateAmount()
         setAmount(x=>x=totalAmount)
 
     },[data])

     useEffect(()=>{
        setData((p)=> p=getCart)      
    },[])

     
 
      return (
        <div className='checkout_wrapper'>
            <div className="inner_container"> 
          
            <div className="checkout_container"> 
            <h1>Checkout</h1>
            <span className='warning'>This is not a real website so do not put credit card</span>
              {  data ?
                 data.map((value)=>(
                     <div className="checkout" >
                        <img src={value.image} alt=""/>
                        <div className="price_name">
                            <p>  {value.name}</p>
                            <span> ${value.price}</span>

                    <div className="quantity">
                      <button className='decrease' onClick={()=>{removeFromCart(value)}}><span>-</span></button>  
                    <span> {value.qty}</span>
                    <button className='increase' onClick={()=>{addtoCart(value)}}><span>+</span></button>  

                    </div>
                        </div>
                     </div>
                 )) : <h2>Cart is empty</h2>
             }
          
            
            </div>
            
        <div className="proceed">
        <Elements stripe={stripePromise}>
      <Payment amount={amount }/>
    </Elements>
        </div>
            
            </div>
        </div>
    )
}

export default Checkout
