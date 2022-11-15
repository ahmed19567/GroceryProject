import React, {useState ,useContext, useEffect} from 'react'
import {UserContext} from '../../App'
import { FaCartPlus } from 'react-icons/fa';
import {Link} from 'react-router-dom'

 
import './nav.css'
import produce from './Images/fresh-produce.png'
function Nav() {
    const user = useContext(UserContext)

    const[itemLength, setItemLength] = useState(0)

    function logout(){
        localStorage.removeItem('token')
        window.location.reload(false)
        
    }

 
        let getCart = JSON.parse(localStorage.getItem('cart'))
   

     return (
        <div className='nav-wrapper'>
                <div className="nav"> 
            <div className="nav_section_1">
                <Link to='/'>
                <img src={produce} alt="Logo"/>
                </Link>
            </div>
            <div className="nav_section_2">
                <ul>
                    <Link to='/'>
                    <li>Home</li>
                    </Link>
                    <Link to='/produce'>
                    <li>Produce</li>
                    </Link>
                 </ul>

            </div>
         {user?   <div className="logout">
             <button onClick={logout}><p>Logout</p></button>
             <Link to='/checkout'> 
             <p className='cart'>
                 <FaCartPlus/>
                <span >{getCart?getCart.length:0}</span>
                 </p>
                 </Link>
            
         </div>  : <div className="nav_section_3">


<div className="signin">
    <Link to='/login'>
    <button><p>Login</p></button>
    </Link>
</div>

<div className="signup">
    <Link to='/signup'>
    <button><p>Sign-up</p></button>
    </Link>

</div>

</div>}
            
            </div>
        </div>
    )
}

export default Nav
