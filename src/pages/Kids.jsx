import React from "react";

const Kids = () => {
  return (
    <div style={{ marginBottom: "1em" }} className="menuItem">
      <div className="sideMenu">
        <h2>Side Orders</h2>
        <div className="menuItemsDiv">
          <span>Coconut Shrimp - $ 5.50</span>
          <span> Chicken Skewers - $ 5.75</span>
          <span>Ginger Dressing - $ 0.50</span>
          <span>White Rice - $ 3.95</span>
          <span> Brown Rice - $ 3.95 </span>
          <span>Garlic Noodles - $ 4.25</span>
          <span>Mixed Vegetables - $ 6.50 </span>
          <span>Shrimp Sauce - $ 0.50</span>
        </div>
      </div>

      <div className="sideMenu">
        <h2>Kids Menu</h2>
        <div className="menuItemsDiv">
          <p>Chicken Skewers - $ 6.75 (Served with smiley face fries)</p>
          <p> Chicken Nuggets -$ 6.75 Served with smiley face fries</p>
          <p>Fried Shrimp -$ 6.75 Served with smiley face fries</p>
        </div>
        <span>
          <i>* Prices are subject to change without notice.</i>
        </span>
      </div>
    </div>
  );
};

export default Kids;
