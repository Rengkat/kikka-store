function SingleProductReducer(state, action) {
  if (action.type === "ADD_TO_CART") {
    // const inCar = state.cart.filter((x) => x.id === payload.id);
    return {
      ...state,
      cart: [...state.cart, { ...action.payload, quantity: 1 }],
    };
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
  if (action.type === "INCREASE_QUANTITY") {
    return {
      ...state,
      cart: state.cart.map((x) =>
        x.id === action.payload ? { ...x, quantity: x.quantity + 1 } : x
      ),
    };
  }

  if (action.type === "DECREASE_QUANTITY") {
    // const pro = state.cart.filter((x) => x.id === action.payload);
    return {
      ...state,
      cart: state.cart.map((x) =>
        x.id === action.payload
          ? {
              ...x,
              quantity: x.quantity <= 1 ? (x.quantity = 1) : x.quantity - 1,
            }
          : x
      ),
    };
  }

  return state;
}

export default SingleProductReducer;
