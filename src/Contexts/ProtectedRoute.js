import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ProtectedRoute;
