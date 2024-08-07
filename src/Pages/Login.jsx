import React, { useState } from 'react';
import './Login.css';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {login} from '../Redux/authSlice'
function Login() {
  
  const [credentials,setCredentials]= useState({email:'',password:''});
  const dispatch=useDispatch();
  const navigate= useNavigate();
  
   const handleSubmit=async(e)=>{
     e.preventDefault();
    
    console.log('Email:', credentials.email);
    console.log('Password:', credentials.password);

     try{
      await dispatch(login(credentials)).unwrap();
       navigate('/');
     }
     catch(error){
        console.error("Login failed",error);
     } 
   }
  
const handleChange = (e) => {
   const {name,value}= e.target;
   setCredentials(prev=> ({...prev,[name]:value}));
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
        <p> Email & Password= michael.lawson@reqres.in</p>
        </form>
     
    </div>
  );
}

export default Login;
