import React from 'react';
import "./Subtotal.css";
import { useSelector } from 'react-redux';
//import { decrement, increme } from './features/counter/counterSlice';


export default function Subtotal() {
  const price= useSelector((state)=> state.counter.totalItemPrices);
  const count = useSelector((state) => state.counter.itemsCount)
  //   console.log("the total price")
  // console.log(price);

  return (
    <div className='subtotal'>
        <p className='subtotal_amount'>
            Subtotal ({count} item):$
            <span className='tDoAmount'>{price}</span></p>
        <div><input type="checkbox" />
        <span>This order contains a gift.</span>
        </div>

        <button>Proceed to checkout</button>
        
    </div>
  )
}
