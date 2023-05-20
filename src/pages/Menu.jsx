import React from "react";
import { Link, Outlet } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="menuDiv">
        <h2>Please select a menu category</h2>
        <ul>
          <li>
            <Link to="appetizers">Appetizers</Link>
          </li>
          <li>
            <Link to="sushi">Sushi</Link>
          </li>
          <li>
            <Link to="specialty">Specialty Rolls & Bento Boxes</Link>
          </li>
          <li>
            <Link to="grill">Grill</Link>
          </li>
          <li>
            <Link to="kids">Kids & Sides</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Menu;
