import React from "react";
import { Link } from "react-router-dom";

const MenuNav = () => {
  return (
    <div className="navDiv">
      <ul>
        <Link to="about">
          <li>About New Zealand</li>
        </Link>
        <Link to="spotlight">
          <li>In the spotlight</li>
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
