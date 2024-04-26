import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error("Context should be inside a component");
  }
  return context;
};
export default useAuthContext;
