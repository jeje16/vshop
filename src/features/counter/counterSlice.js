import { createSlice } from '@reduxjs/toolkit'
import CheckoutProduct from '../../CheckoutProduct';
import Product from "../../Product";
const initialState = {

  itemPrice:0,
  itemTitle:0,
  itemStars:0,
  itemsCount: 0,
  totalItemPrices:0,
  productArray:[], 
  position:-1,
  userId:"",
  isSignedIn:false
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    createCartItems:(state,action)=>{
      state.position++;

          state.productArray.push(
        <CheckoutProduct identify={state.position}
        productPrice={action.payload.productPrice}
        img={action.payload.img}
        name={action.payload.name}
        description={action.payload.description}
        />
      );
        state.totalItemPrices+=action.payload.productPrice;
    },
    deleteCartItems:(state,action)=>{
      state.totalItemPrices-=action.payload.productPrice;

      // for(let i=0; i<state.productArray.length; i++){
      //   if(state.productArray[i].props.identify===action.payload.identify)
      //     state.productArray.splice(i,1);
      // }

       state.productArray.splice(action.payload.identify,1);
      for(let i=0; i<state.productArray.length; i++){
        state.productArray[i].props.identify=i;
      } 

    },
    increment: (state) => {
      state.itemsCount += 1;
     
      
          },
    decrement: (state) => {
      state.itemsCount -= 1;
            
          },

  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement,createCartItems,deleteCartItems } = counterSlice.actions

export default counterSlice.reducer;
































//     incrementByAmount: (state, action) => {
//             state.price += action.payload;
//     },
//     decrementByAmount: (state, action) => {
//       state.price -= action.payload;
// },