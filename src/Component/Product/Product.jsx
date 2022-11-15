import React, {useState, useEffect, useContext} from 'react'
import Display from './Display'
import {UserContext} from '../../App'
 import './product.css'

      
  function Product({value, addtoCart, removeFromCart}) {
      
    const itemsInCart = JSON.parse(localStorage.getItem('cart'))
    const user = useContext(UserContext)
     const[input, setInput] = useState('')
     const[cart] = useState(itemsInCart)
 
    function inputGenerator(e){
   e.preventDefault()
    setInput(e.target.value)
 }
      
         return (
        <div className='product-wrapper'>
       
         <div className="select_option">
       <input type="text" name="" id="" value={input}  onChange={inputGenerator}/>
        </div>  
        <div className="product">
           {
               value.filter((v)=>{
                   if(input==='')
                   return v
                  else if(v.name.toLowerCase().includes(input))
                  return v          
               }).map((val)=>(
                   <div  >
                   <Display value = {val} addtocart={addtoCart} removeFromCart={removeFromCart}/>
              </div>  
               ))
           }   
       </div>
   </div>
    )
}

export default Product
