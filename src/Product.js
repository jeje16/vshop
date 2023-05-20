import React from 'react';
import "./Product.css";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useSelector, useDispatch } from 'react-redux';
import { createCartItems, increment } from './features/counter/counterSlice'

  
  export default function Product({name,img,size,productPrice,description}) {
   const count = useSelector((state) => state.counter.value)
   const dispatch = useDispatch(); 
   const productArray= useSelector((state)=>state.counter.productArray);

   function handleClick(){
    // we need a global array of produc from checktout products
 
  // increment basket item
     dispatch(increment());
    // let this products be a transfered to array of  checkout productsr
      dispatch(createCartItems({productPrice,name,img,description}));
    //console.log("this is the productarray "+ productArray[0].JSON());
    //console.log("it is not working;")
   }


  let productId=0;
 
  return (
    <div className={`product ${size} `}id={productId} >
        <div className='product_info'>
            <p className='product_title'>{name}</p>
            <p className='product_price'>{productPrice}</p>
            <div className='product_rating'>
              <StarOutlineIcon />
            </div>
            <img src={img}/>
            <span>{description}</span>
        </div>
        <button onClick={handleClick} className='basket_button'>add to basket</button>
    </div>
  )
}
