import React from 'react';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import "./CheckoutProduct.css";
import { useSelector, useDispatch } from 'react-redux';
import { decrement,deleteCartItems,isLoggedIn,isNotLoggedIn } from './features/counter/counterSlice'
import { PhotoSizeSelectActual } from '@material-ui/icons';


export default function CheckoutProduct({productPrice,img,name,identify,description}) {
  const count = useSelector((state) => state.counter.postion)
  let isIn=useSelector((state)=>state.loggedIn);

  
  //const productArray=useSelector((state)=>{state.counter.productArray})
  const dispatch = useDispatch();
    function eraseItem(e){
           // lower count
      dispatch(decrement())
      
      // place to slice and-to update product total
     dispatch(deleteCartItems({identify,productPrice}));
      
    }

  return (
    <div className="checkout_product" >
        <img className='checkout_productImage' src={img}/>
        <div className='product_info'>
            <p className='checkout_productTitle'>
               {name}
            </p>
            <p className='checkout_productPrice'>
             ${productPrice}
            </p>
            <p className='checkout_productRating'>
              <StarOutlineIcon />
              <StarOutlineIcon />
              <StarOutlineIcon />
              <StarOutlineIcon />
              <StarOutlineIcon />
            </p>
            <p> "{identify}" {description}</p>
            <button  id={identify} onClick={eraseItem}>remove from cart</button>
        </div>
    </div>
    
  )
}
