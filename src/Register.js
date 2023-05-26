import { useState } from 'react';
import { Link} from "react-router-dom";
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useNavigate } from 'react-router-dom';
//import axios from "axios";
import "./Login.css";
function Register() {
    
    const [email, setEmail] = useState("");
    const [username,setUsername]=useState("");
    const [password, setPassword] = useState("");

    let navigate=useNavigate();
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        //API call using fetch
        let result = await fetch(
        'http://localhost:5000/register', {
            method: "post",
            body: JSON.stringify({email,username,password}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved succesfully");
            setEmail("");
            setPassword("");
            navigate("/login");
        }
    }
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
              <h1>Register</h1>

            <form action="" className="login_form">
            <h5>E-mail</h5>
                <input type="email" placeholder="email"
                value={email} onChange={(e) => setEmail(e.target.value)} />
                            <h5>Username</h5>
                <input type="text" placeholder="username"
                value={username} onChange={(e) => setUsername(e.target.value)} />

                
                <h5>Password</h5>
                <input type="text" placeholder="password"
                value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className='login_signInButton'
                onClick={handleOnSubmit}>submit</button>
            </form>
 
            <p className="policy">
                By registering you agree to the VersyleShop website contions of Use & Sale. Please
                see our privacy notice, our cookies notice and ur interest-based ads notice.
            </p>
            <Link to="/sign-in">
            <button type="submit" className='login_registerButton' >
               Login to your account</button>
            </Link>
        </div>
         </div>
        </div>










    );
}
 
export default Register;