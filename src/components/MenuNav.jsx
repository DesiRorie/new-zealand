import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const MenuNav = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
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
        <Link to="menu" className="menuLink" onMouseEnter={handleMouseEnter}>
          <li>Menu</li>
        </Link>
        <Link>
          <li>Wine</li>
        </Link>
        <Link>
          <li>Map</li>
        </Link>
      </ul>
      {isHovered && (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="hoverDiv"
        >
          <ul style={{ padding: "2em" }}>
            <li>Appetizers</li>
            <li>Sushi</li>
            <li>Specialty Rolls & Bento Boxes</li>
            <li>Grill</li>
            <li>Dessert</li>
            <li>Kid & Sides</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuNav;
