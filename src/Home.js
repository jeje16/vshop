import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
//import { decrement, increment } from './counterSlice';
import Header from "./Header"; 


import Product from "./Product";
import "./Home.css";
 
export default function Home() {
  let description=["This is a 4th generation jet engine design to keep people in check",
            "This jet engine is a tv made funny",
          "this jet engine is car made happy",
        "this jet engine was design by jean",
      "this jet engine create 10,000 pounds of force",
    "Multibilion dollars jet engine create by me"];
  return (
    <div>
      <Header />
      <div className="home">
        <div className="home_container">
          <img className='home_mainImage' src="https://www.x-cart.com/img/16591/ecommerce-p800.jpg" />
          <div className='home_row'>
                <Product description={description[1]} productId={1} productPrice={1000} names="Crab"size="product_medium" img="./jet1.png" />
                <Product description={description[2]}   productId={2} productPrice={1000}id="1"names="backpack" size="product_medium" img="./jet2.png"/>

                </div>
                <div className='home_row'>
                    <Product description={description[3]}  productId={3} productPrice={9000} id="2" names="Lamborgini" size="product_small" img = "./jet3.png"/>
                    <Product description={description[4]} productId={4} productPrice={100} id="3" names="Jet"size="product_small" img ="./jet1.png"/>
                    <Product description={description[5]}  productId={5} productPrice={9000}id="4" names="Jet" size="product_small" img ="./jet4.png" />

                </div>
                <div className='home_row'>
                        <Product description={description[0]}productId={6} productPrice={6000}id="5" names="Jet" size="product_large"img="./jetMaster.png" />
                </div>
          </div>
      </div>
    </div>
   )
 }
 