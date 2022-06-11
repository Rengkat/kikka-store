import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import GeneralContextProvider from "./Contexts/GeneralContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GeneralContextProvider>
      <Router>
        <App />
      </Router>
    </GeneralContextProvider>
  </React.StrictMode>
);
