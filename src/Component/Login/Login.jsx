import React,{useState, useEffect, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
 import {UserContext} from '../../App'
import './login.css'
import axios from 'axios'
function Login() {
    const navigate = useNavigate()
    const [message, setMessage] = useState('')
    const [userName, setUserName]  = useState({
        email : '',
        password : ''
    })
    
  

    function handleSubmit(e){
        e.preventDefault()
        axios.post('https://grocerybackend-api.onrender.com/login', userName)
        .then((res)=>{

             if(res.status===200)
         {
            localStorage.setItem('token', res.data)
            navigate('/')
            window.location.reload(false)
         } 
        })
        .catch(e=>{
            if(e.response.status===400)
     
            setMessage(e.response.data)
           })


    }
 
     return (
        <div className="login_wrapper"> 
        <div className='login'>
     <h3 className='message'>{message ? <p>{message}</p> : ""}</h3>
            <h1>Login</h1>
        <form htmlFor="" method='POST' onSubmit={handleSubmit}  >

            <div className="login-field">
            <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" required onChange={(e)=>setUserName({...userName, email : e.target.value})}
    placeholder='Email'
    />
            </div>

        <div className="login-field">
 <  label htmlFor="password">Password</label>
    <input type="password" id="password" name="password" required onChange={(e)=>setUserName({...userName, password : e.target.value})}
    placeholder="Password"
    /> 
 </div>
   
  <button type="submit" className='submit-login'>Login</button>
     

        </form>
        </div>
        </div>
         
    )
}

export default Login
