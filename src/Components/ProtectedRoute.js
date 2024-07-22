import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { GeneralContext } from "../Contexts/GeneralContext";
import { getUserFromLocalStorage } from "../Contexts/localStorage";

const ProtectedRoute = ({ children }) => {
  const user = getUserFromLocalStorage();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
