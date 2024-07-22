import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import GeneralContextProvider from "./Contexts/GeneralContext";
import AuthContextProvider from "./Contexts/AuthContext";
import CartContextProvider from "./Contexts/CartContex";
import WishlistContextProvider from "./Contexts/WishlistContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GeneralContextProvider>
      <AuthContextProvider>
        <CartContextProvider>
          <WishlistContextProvider>
            <Router>
              <App />
            </Router>
          </WishlistContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </GeneralContextProvider>
  </React.StrictMode>
);
