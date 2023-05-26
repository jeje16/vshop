
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import { store } from './store'
import { Provider } from 'react-redux';
import ReactDOM from "react-dom/client";
export{default as Login} from './Login';
export{default as Register } from './Register';
export{default as Home} from "./Home"
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Provider store={store}>
     <App />
  </Provider>
    
  </BrowserRouter>
);