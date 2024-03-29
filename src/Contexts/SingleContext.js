import React, { createContext, useReducer } from "react";

import SingleProductReducer from "../Components/Reducers/SingleProductReducer";
export const SingleProductContext = createContext();
const initialState = {
  cart: [],
  wishlist: [],
  loading: false,
  selectedImage: {},
  isSelected: false,
};

function SingleContextProvider({ children }) {
  const [state, dispatch] = useReducer(SingleProductReducer, initialState);
  // console.log(state.cart);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  const addToWishList = (product) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: product });
  };
  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };
  const removeFromWishlist = (id) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: id });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const clearWishlist = () => {
    dispatch({ type: "CLEAR_WISHLIST" });
  };
  const increaseQuanity = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
  };
  const decreaseQuanity = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
  };
  const selectImage = (image) => {
    dispatch({ type: "SELECT_IMAGE", payload: image });
  };
  const changeSelect = (res) => {
    dispatch({ type: "CHANGE_SELECT", payload: res });
  };
  return (
    <SingleProductContext.Provider
      value={{
        ...state,
        addToWishList,
        increaseQuanity,
        decreaseQuanity,
        addToCart,
        removeFromCart,
        removeFromWishlist,
        clearCart,
        clearWishlist,
        selectImage,
        changeSelect,
      }}>
      {children}
    </SingleProductContext.Provider>
  );
}

export default SingleContextProvider;
