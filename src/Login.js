import React, { useState } from "react";  
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "./Login.css";

function Login() {
       let navigate = useNavigate();
    const[email,setEmail]=useState('');
    const [password, setPassword] = useState('');
    //user authentication before getting in account

    const signIn= e=>{
        e.preventDefault();
        
        navigate('/');
        
    }




    //     const register= e=>{
    //         auth
    //         .createUserWithEmailAndPassword(email,password)
    //         .then(auth=>{
    //             if(auth){
    //               history.pushState('/');  
    //             }
                
    //         }).catch(error=>alert(error.message));
    // }
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

            <form className="login_form">
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
               
                <h5>Password</h5>
                <input type="text" value={password} onChange={e=>setPassword(e.target.value)}/>

                <button type="submit" className='login_signInButton' onClick={signIn} >Sign In</button>

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
        
    </div>
    </div>
  )
}

export default Login;