import React, { createContext, useEffect, useReducer } from "react";
import GeneralReducer from "../Components/Reducers/GeneralReducer";
import { addUserToLocalStorage, getUserFromLocalStorage } from "./localStorage";

export const GeneralContext = createContext();
const initaialState = {
  isOpnenMenu: true,
  loading: true,
  error: false,
  products: [],
  user: getUserFromLocalStorage(),
};

function GeneralContextProvider({ children }) {
  const [state, dispatch] = useReducer(GeneralReducer, initaialState);
  // console.log(state.products);
  const opnenMenu = () => {
    dispatch({ type: "OPEN_MENU" });
  };
  // addUserToLocalStorage
  const loginUser = async (user) => {
    dispatch({ type: "LOGIN_USER", payload: user });
    addUserToLocalStorage(user);
  };

  const fetchProducts = async () => {
    dispatch({ type: "LOADING", payload: true });
    try {
      const data = await fetch("https://course-api.com/react-store-products");
      const response = await data.json();

      dispatch({ type: "FETCH_PRODUCTS", payload: response });
      dispatch({ type: "ERROR", payload: false });
      dispatch({ type: "LOADING", payload: false });
    } catch (error) {
      dispatch({ type: "ERROR", payload: true });
    }
  };
  return (
    <GeneralContext.Provider value={{ ...state, opnenMenu, fetchProducts, loginUser }}>
      {children}
    </GeneralContext.Provider>
  );
}

export default GeneralContextProvider;
