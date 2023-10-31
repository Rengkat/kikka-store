import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { GeneralContext } from "./GeneralContext";

const ProtectedRoute = () => {
  const { user } = useContext(GeneralContext);
  console.log(user);
  if (!user) {
    <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
