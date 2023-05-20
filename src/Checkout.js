//@ts-nocheck
import React from 'react';
import "./Checkout.css"; 
import { Link } from "react-router-dom";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './features/counter/counterSlice';
import Header from "./Header"; 

export default function Checkout() {
    const allCheckoutProducts= useSelector((state)=> state.counter.productArray);
  const dispatch = useDispatch()

 
  return (
    <div>
      <Header />
    <div className='checkout'>
        
      <div className='checkout_left'>
        <img className='checkout_ad' src="add.png" />
        <div >
          <p className='checkout_title'>
            your shopping bascket
          </p>
        
           {allCheckoutProducts}
                  </div>

      </div>
      <div className='checkout_right'>
        <Subtotal />
      </div>    
           </div>
           </div>
  )
}
