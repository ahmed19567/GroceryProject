import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
 import './signup.css'
import axios from 'axios'
import produce from '../Nav/Images/fresh-produce.png'

{/* <img src={produce} alt="Logo"/> */}

function Signup() {
  let navigate = useNavigate()
    const [user, setUser] = useState({
        name:'',
        email:'',
        password: '',
        passwordconfirm: '',

    })
   function onSubmit(e){
     e.preventDefault()
     axios.post('https://grocerybackend-api.onrender.com/register', user)
     .then((res)=>{
       if(res.data)
       navigate('/')
        })
     .catch((e)=>{
       if(e.response.status===400)
       window.location.reload(false)
      })
    }
     return (
        <div className='signup_wrapper'>
             <div className="signup-box">
              <img src={produce} alt=""/>
                <form action="" method="post"  onSubmit={onSubmit}>
                <div className="signupbox">
        <label for="name">Name</label>
          <input type="text" id="name" name="name" required placeholder='Name' 
          onChange={(e)=>setUser({...user, name : e.target.value})}
          />
        </div>
        <div className="signupbox">
        <label for="email">Email</label>
          <input type="email" id="email" name="email" required  placeholder='Email' 
          onChange={(e)=>setUser({...user, email : e.target.value})}
          />
        </div>
        <div className="signupbox">
        <label for="password">Password</label>
          <input type="password" id="password" name="password" required placeholder='Password' 
          onChange={(e)=>setUser({...user, password : e.target.value})}
          />
        </div>
        <div className="signupbox">
        <label for="retrypassword">Password</label>
          <input type="password" id="passwordconfirm" name="passwordconfirm" required placeholder='Retry-Password'
          onChange={(e)=>setUser({...user, passwordconfirm : e.target.value})}
          />
        </div>

        <button className='signup_sumbit' type='submit'><p>Sign-Up</p></button>

                  
                </form>
                
            </div>
        </div>
    )
}

export default Signup
