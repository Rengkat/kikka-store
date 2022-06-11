function SingleProductReducer(state, action) {
  if (action.type === "ADD_TO_CART") {
    return { ...state, cart: [...state.cart, action.payload] };
  }

  if (action.type === "ADD_TO_WISHLIST") {
    return { ...state, wishlist: [...state.wishlist, action.payload] };
  }
  if (action.type === "REMOVE_FROM_CART") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }
  if (action.type === "REMOVE_FROM_WISHLIST") {
    return {
      ...state,
      wishlist: state.wishlist.filter((item) => item.id !== action.payload),
    };
  }
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "CLEAR_WISHLIST") {
    return { ...state, wishlist: [] };
  }
  return state;
}

export default SingleProductReducer;
