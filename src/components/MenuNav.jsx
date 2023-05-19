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
        <Link
          className="menuLink"
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
        >
          <li>Menu</li>
        </Link>
        <Link>
          <li>Wine</li>
        </Link>
        <Link>
          <li>Map</li>
        </Link>
      </ul>
      {isHovered && <div className="hoverDiv">Hovered Menu Link</div>}
    </div>
  );
};

export default MenuNav;
