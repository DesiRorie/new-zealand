import React from "react";
import { Link } from "react-router-dom";

const MenuNav = () => {
  return (
    <div className="navDiv">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="about">
          <li>About </li>
        </Link>
        <Link to="spotlight">
          <li>Spotlight</li>
        </Link>
        <Link>
          <li>Menu</li>
        </Link>
        <Link>
          <li>Wine</li>
        </Link>
        <Link>
          <li>Map</li>
        </Link>
      </ul>
    </div>
  );
};

export default MenuNav;
