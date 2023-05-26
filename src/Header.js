import React from "react";
//import ReactDOM from "react-dom";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css";
import { Link } from "react-router-dom";
//import { useSelector } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import Home from "./Home";
//import { decrement, increment } from './/features/counter/counterSlice'

function Header({username,logout}){
    const count = useSelector((state) => state.counter.itemsCount)
    let isIn=useSelector((state)=>state.loggedIn);



    async function Logout(){
        logout();
        await window.location.reload(false);
    }

    return (
        <div className="header">
            <Link to ="/" style={{textDecoration:"none"}}>
            <div className="header_logo">
                <StorefrontIcon className="header_logoImage" fontSize="large"/>
                <h2 className="header_logoTitle">VersyleShop</h2>
            </div>

            </Link>
            
            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header_searchIcon"/>
            </div>
            <div className="header_nav">
             <div className="nav_item">
             {console.log("the username is : "+{username})}

               { (username===""|| username===undefined)? <span className="nav_itemLineOne">Hello Guest</span>
                :<span className="nav_itemLineOne">Hello,{username}</span>}
                    {console.log("the username is : "+username)}

               
            {(username===""|| username===undefined)?
            <Link to="/login" style={{color:"white",textDecoration:"none"}}>
                <span className="nav_itemLineTwo">Sign in</span></Link>

                :<Link to="/" style={{color:"white",textDecoration:"none"}}>
                        <span onClick={Logout}>Logout</span></Link>}
                
            </div>
            <div className="nav_item">
                <span className="nav_itemLineOne">Your</span>
                <span className="nav_itemLineTwo">Shop</span>
            </div>
            <Link to="/checkout" >
                <div className="nav_itemBasket">
                <ShoppingBasketIcon />
                <span className="nav_itemLineTwo basketCount">{count}</span>
                </div> 
            </Link>
                      
            </div>


        </div>
    );
}
export default Header;