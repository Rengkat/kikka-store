// GENERAL REDUCER
function GeneralReducer(state, action) {
  if (action.type === "OPEN_MENU") {
    return { ...state, isOpnenMenu: !state.isOpnenMenu };
  }
  if (action.type === "FETCH_PRODUCTS") {
    return { ...state, products: action.payload };
  }
  if (action.type === "ERROR") {
    return { ...state, error: action.payload };
  }
  if (action.type === "LOADING") {
    return { ...state, loading: action.payload };
  }
  if (action.type === "UPDATE_USER") {
    return { ...state, user: action.payload };
  }
  return state;
}

export default GeneralReducer;
