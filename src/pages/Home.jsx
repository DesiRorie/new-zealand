import React from "react";
import MenuNav from "../components/MenuNav";
import { Outlet } from "react-router-dom";
import insideImage from "../assets/insideImage.jpeg";

const Home = () => {
  return (
    <div className="displayDiv">
      <img src={insideImage} alt="" />
    </div>
  );
};

export default Home;
