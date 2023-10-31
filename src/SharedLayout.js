import React from "react";
import { Footer, NavBar, Newsleter } from "./Components";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Newsleter />
      <Footer />
    </div>
  );
};

export default SharedLayout;
