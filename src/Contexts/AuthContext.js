import { createContext, useContext, useEffect, useReducer } from "react";
import { getUserFromLocalStorage } from "./localStorage";
export const AuthContext = createContext();
// Create a custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);
export const authReducer = (state, action) => {
  switch (action.type) {
    case "SUCCESSFUL_LOGIN":
      return { ...state, user: action.payload, loading: false, error: null };
    case "FAILED_LOGIN":
      return { ...state, user: null, loading: false, error: action.payload };
    case "LOGOUT":
      return { user: null, loading: false, error: null };
    default:
      return state;
  }
};
const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: getUserFromLocalStorage(),
    loading: false,
    error: null,
  });

  return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
