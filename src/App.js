import React from "react";
import Home from "./Home";
import Login from "./Login";
import "./Login.css";
import Checkout from "./Checkout";
import "./App.css";
import { Route,Routes } from 'react-router-dom';
import Counter from "./features/counter/Counter.js"
import Register from "./Register";




function App(){
    
    return (
        <div className="app">
          
                <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/sign-in" element={<Login />} />
                <Route path="/redux" element={<Counter />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    );
}
export default App;