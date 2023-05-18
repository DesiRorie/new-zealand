import React from "react";
import MenuNav from "../components/MenuNav";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="displayDiv">
      <MenuNav />
      <Outlet />
    </div>
  );
};

export default Home;
