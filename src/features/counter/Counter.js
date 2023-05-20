import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const price= useSelector((state)=> state.counter.price);
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="add to cart"
          onClick={() => dispatch(increment())}
        >
          ADD to cart
        </button>
        <span>{count}</span>
        <span>---=---</span>
        <span>{price}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          remove from cart
        </button>
      </div>
    </div>
  )
}
export default Counter;