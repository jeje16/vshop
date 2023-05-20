import React from "react";
//import ReactDOM from "react-dom";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
//import { decrement, increment } from './/features/counter/counterSlice'

function Header(){
    const count = useSelector((state) => state.counter.itemsCount)
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
                <span className="nav_itemLineOne">Hello Guest</span>
                <Link to="/sign-in" style={{color:"white",textDecoration:"none"}}>
                <span className="nav_itemLineTwo">Sign in</span>
                </Link>
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