import React,{useContext} from 'react'
import  {useStripe, useElements, CardElement} from '@stripe/react-stripe-js'
import{UserContext} from '../../App'
import { useNavigate } from 'react-router-dom'
import {loadStripe} from '@stripe/stripe-js'
import axios from 'axios'
import './payment.css'

function Payment(props) {
  const user = useContext(UserContext)
  const navigate = useNavigate()
 

    const{amount} = props
    const stripe = useStripe()
    const elements = useElements()
    const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE}`)
     async function submitPayment(e){
        e.preventDefault()
        if(!stripe || !elements)
          return
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card: elements.getElement(CardElement),
        }); 
        if(!error){
            const {id} = paymentMethod
          await axios.post('https://grocerybackend-api.onrender.com/payment', {
            amount : amount,
            id,
           }, {
             headers : {
               'authentication' : user
             }
           }).then((res)=>{
             if(res.data.success){ 
             localStorage.removeItem('cart')
              navigate('/done')         
             }
           })
        }else
        console.log(error.message,'erro')
        }
      
     
    return (
        <div className='checkout_wrapper'>      
       <h3>Confirm Payment</h3>
    <h2>Total amount : ${amount ? amount : 0}</h2>
        <form onSubmit={submitPayment}>
             <CardElement className='card'/>
          <button type="submit"   className='pay-button'>
            Pay
          </button>
        </form> * 
          </div>
    )
}

export default Payment
