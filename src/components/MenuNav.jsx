import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
const MenuNav = () => {
  return (
    <div className="navDiv">
      <ul>
        <Link>
          <li>About New Zealand</li>
        </Link>
        <Link>
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
