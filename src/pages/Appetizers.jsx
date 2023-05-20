import React from "react";
import spider from "../assets/spider.jpeg";
const Appetizers = () => {
  return (
    <div className="appetizersDiv">
      <h2 style={{ color: "rgba(198, 123, 4, 0.986" }}>Savory Starters</h2>
      <div className="columnDiv">
        <div className="halfWidthDiv">
          <div className="foodItem">
            <h3>Spring Roll - $2.99</h3>
            <p>
              Crispy roll, filled with shredded vegetables & chicken OR crab
              meat (1 roll)
            </p>
            {/* <img style={{ borderRadius: "5px" }} src={spider} alt="" /> */}
          </div>
          <div className="foodItem">
            <h3>Vegetable Spring Roll - $2.99</h3>
            <p>
              Crispy roll, filled with shredded vegetables & chicken OR crab
              meat (1 roll)
            </p>
          </div>
          <div className="foodItem">
            <h3>Tuna Tataki - $8.50</h3>
          </div>
          <div className="foodItem">
            <h3>Edamame - $ 5.50 </h3>
            <p>Fresh Soy Beans</p>
          </div>
          <div className="foodItem">
            <h3>Bang Shrimp - $ 8.95</h3>
            <p> Crispy tossed in a creamy, spicy sauce</p>
          </div>
          <div className="foodItem">
            <h3>Spicy Tuna Tar Tar - $ 9.25</h3>
            <p>
              Thinly sliced tuna, smelt roe, sesame seed with lightly spicy
              ginger soy sauce and crispy English cucumbers
            </p>
          </div>
        </div>
        <div className="halfWidthDiv">
          <div className="foodItem">
            <h3>Baked Mussel - $7.50 (4pcs)</h3>
          </div>
          <div className="foodItem">
            <h3>Potstickers - $8.25</h3>
            <p>
              Crescent shaped dumplings filled with ground pork & vegetables
              choice pan fried or steamed (6 pcs)
            </p>{" "}
          </div>
          <div className="foodItem">
            <h3>Salt & Pepper Calamari - $ 8.50</h3>
            <p>
              Crispy calamari tossed with scallions, salt & black pepper served
              with red chili bean sauce
            </p>
          </div>
          <div className="foodItem">
            <h3>Shrimp & Veggie Tempura - $7.50</h3>
          </div>
          <div className="foodItem">
            <h3> Veggie Tempura - $6.95</h3>
          </div>
          <div className="foodItem">
            <h3> Crab Cheese(6pcs) - $6.25</h3>
          </div>
          <div className="foodItem">
            <h3>Tuna Poki - $ 10.50</h3>
            <p>
              Cubed tuna with ripe avocado and cucumber tossed in a special
              sauce
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appetizers;
