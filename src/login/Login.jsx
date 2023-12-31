import React from 'react'
import {useState } from "react"
import './login.css'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

function Login(props) {
    const navigate =useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handelSubmit(e){
        e.preventDefault();
      
    }
    const handleClick = () => { 
      navigate('Home');
      Swal.fire(
        'Good job!',
        'You Are Register Now',
        'success'
      )
     
    };
   
   
  return (
  <div className='all'>
  <form onSubmit={handelSubmit} className='form' >
    <label  htmlFor="email  " className=''>Email</label>
    <input placeholder='Your Email ?' type="email"  value={email}  onChange={(e)=>setEmail(e.target.value)}/>
    <label htmlFor="password">password</label>
    <input type="password" placeholder='Your password ?'  value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <button type='submit' className='btn-1 mt-1' onClick={handleClick}>Login</button>
    <button className='mt-2 btn-2' onClick={()=>props.Toggle("Register")}>Don’t have any account ? Register here</button>
  </form>
  </div>
  )
}

export default Login