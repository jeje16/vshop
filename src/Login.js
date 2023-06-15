import React, { useState } from "react";  
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from 'react-redux';
import {isLoggedIn,isNotLoggedIn} from './features/counter/counterSlice'
import axios from "axios";
import "./Login.css";

const baseUrl = process.env.REACT_APP_ENVIRONMENT === 'dev' ? process.env.REACT_APP_LOCAL_URL : process.env.REACT_APP_PROD_URL

   function Login() {
    let isIn=useSelector((state)=>state.loggedIn);
    const dispatch = useDispatch()
      const navigate = useNavigate();
      const [email, setEmail]=useState("");
      const [password, setPassword]=useState("");
       
      const handleError = (err) =>
        toast.error(err, {
          position: "bottom-left",
        });
      const handleSuccess = (msg) =>
        toast.success(msg, {
          position: "bottom-left",
        });
   
      const handleSubmit = async (e) => {
        e.preventDefault();
    
            
        try {
          console.log("fetching from: " + baseUrl + "login")
          const { data } = await axios.post(
            baseUrl + "login",
            {
              email,password
            },
            { withCredentials: true }
          );
          
          const { success, message } = data;
          if (success) {
          dispatch(isLoggedIn());
            handleSuccess(message);
            setTimeout(() => {
              navigate("/");
            }, 1000);
          } else {
            handleError(message);
          }
        } catch (error) {
          console.log(error);
        }
        // dispatch(isNotLoggedIn);
        setEmail("");
        setPassword("");
      };
    
       

  return (
    <div className="background">
    <div className='login'>
        <Link to='/' style={{textDecoraction:"none"}}>
            <div>
                <StorefrontIcon className='login_logoImage'/>
                <h2 className='login_logoTille'>VersyleShop</h2>
            </div>
        
        </Link>
        <div className="login_container">
            <h1>sign-in</h1>

            <form className="login_form" onSubmit={handleSubmit}>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
               
                <h5>Password</h5>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                <button type="submit" className='login_signInButton' >Sign In</button>

            </form>
            <p className="policy">
                By signing-in you agree to the VersyleShop website contions of Use & Sale. Please
                see our privacy notice, our cookies notice and ur interest-based ads notice.
            </p>
            <Link to='/Register'>
            <button type="submit" className='login_registerButton' >
                Create your versyle <StorefrontIcon className='login_logoImage'/> account</button>
                </Link>
        </div>
        <ToastContainer />
    </div>
    </div>
  )
}

export default Login;