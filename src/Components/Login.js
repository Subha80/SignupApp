import React, { useState } from 'react';
import "./Login.css";
import { FaUser } from "react-icons/fa";
import { FaLock} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Login = () => {
    let[action,setAction]=useState("Sign Up");
  return (
    <div className='container'>
        <div className='header'>
            <h1>{action}</h1>
       </div>
          {action==="Login"?<div></div>:
            <div className='inputfield'>
                <input type="text" placeholder="Username"/>
                <FaUser className='icon' />
            </div>}
            <div className='inputfield'>
                <input type="text" placeholder="Email Id"/>
                <MdEmail  className='icon'/>
            </div>
            <div className='inputfield'>
                <input type="password" placeholder="Password"/>
                <FaLock className='icon' />
            </div>
            {action==="Sign Up"?<div></div>:
            <div className='remember-forgot'>
                <label><input type="checkbox"/>Remember me</label>
                <a href="#">Forgot Password?</a>
            </div>}
            <div className='submit-container'>
               <button className={action==="Login"?"submit-button gray":"submit-button" }onClick={()=>setAction("Sign Up")}>Sign Up</button>
               <button className={action==="Sign Up"?"submit-button gray":"submit-button"} onClick={()=>setAction("Login")}>Login</button>
            </div>
            {action==="Login"?<div></div>:
            <div className='register'>
                <p>Don't have an account? <a href="">Register</a></p>
            </div> }     
    
    </div>
  )
}

export default Login;
