import React from 'react'

function Display({value, addtocart}) {
     return (
        <div className='product_div' key={value._id}>
           <img src={value.image} alt=""/>   
           <h4>{value.name}</h4>
           <button className='addtocart' onClick={()=>{addtocart(value)}} >Add to cart</button>
        </div>
    )
}

export default Display
