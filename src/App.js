 import './App.css';
 import React, {useState, useEffect} from 'react'
 import Axios from 'axios'
 import {Routes,Route, Router } from 'react-router-dom'
 //files
 import Nav from './Component/Nav/Nav'
 import Hero from './Component/Hero/Hero'
 import Category from './Component/Category/Category'
 import SingUp from './Component/Signup/Signup'
import Footer from './Component/Footer/Footer';
import Newsletter from './Component/Newsletter/Newsletter';
import SignUp from './Component/Signup/Signup'
import Login from './Component/Login/Login'
import Product from './Component/Product/Product'
import Checkout from './Component/Checkout/Checkout'
import NotFound from './Component/NotFound/Notfound'
import Thanks from './Component/Thanks/ThankYou'
 
import axios from 'axios';

export const UserContext = React.createContext()
export const CartContext = React.createContext()

 function App() {
       
  const itemsInCart = JSON.parse(localStorage.getItem('cart'))

  const [user, setUser] = useState(localStorage.getItem('token'))
  const [data, setData] = useState([])
  const [cart, setCart] = useState( itemsInCart ? itemsInCart : [])
    useEffect(()=>{
    axios.get('https://grocerybackend-api.onrender.com/produce')
    .then((val)=>{setData(val.data)})
    .catch((e)=>{console.log(e)})
  },[])
  
  function addtoCart(product){
    const exist = cart.find((x)=>x._id===product._id)
    if(exist)
    {
        setCart(
        cart.map((x)=> x._id===product._id ? {...product, qty : x.qty+1}:x))
 } else
    { setCart([...cart, {...product , qty : 1}])
 }
     }
     const removeFromCart = (product) => {
         const exist = cart.find((x) => x._id === product._id);
         if (exist.qty === 1) {
           setCart(cart.filter((x) => x._id !== product._id));
         } else {
           setCart(
             cart.map((x) =>
               x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x
             )
           );
         }
       };

       localStorage.setItem('cart', JSON.stringify(cart))
 
                
     return (
    <div className="App">
      <UserContext.Provider value={user}  >
     <CartContext.Provider value={cart}> 
       
      
      <Routes>
          <Route path='/' element={<><Nav/> <Hero/>  <Newsletter/> <Footer/> </>}/>
          <Route path='/signup' element={<SignUp/> }/>
          <Route path='/login' element={<><Nav/><Login/><Footer/></>}/>
          <Route path='/produce' element={<> <Nav/> <Product value={data} addtoCart={addtoCart} removeFromCart={removeFromCart}/> <Footer/> </>} />
          <Route path='/checkout' element={<> <Nav/> <Checkout addtoCart={addtoCart} removeFromCart={removeFromCart} cart={cart}/> <Footer/> </>} />
          <Route path='*' element={<> <Nav/> <NotFound/> <Footer/> </>}/>
          <Route path='/done' element={<Thanks/>}/>
          <Route/>
 
         
        </Routes>
        </CartContext.Provider>

  {/* <Product value={data}/> */}
      </UserContext.Provider>
   
   {/* <Checkout value={data}/> */}
   
    </div>
  );
}

export default App;
