import React from "react";
import chef from "../assets/chef.jpeg";

const About = () => {
  return (
    <div className="aboutDiv">
      <h2>The History of New Zealand Café</h2> <img src={chef} alt="" />
      <p>
        New Zealand Café features a blend of high quality seafood and Asian
        Cuisine in a sophisticated setting. We are the premiere dine in and
        carry out restaurant with the highest quality seafood and the freshest
        ingredients. Our menu focuses on select dishes created to capture the
        distinct flavors and style of the major culinary regions of Asia. Our
        menu is a fusion of culinary influences stemming from eclectic New
        Zealand cuisine to Asian gourmet. We are truly the best take out in
        town!
      </p>
      <p>
        New Zealand's cuisine has recently come into its own, excellent
        restaurants have popped up all across the country, serving home grown
        fare as well as a wide variety of international cuisines, particularly
        Asian.
      </p>
      <p>
        New Zealand Café is blossoming into a series of restaurants in New
        Zealand and is rapidly spreading to the United States. This country was
        the base for filming The Lord of the Rings.
      </p>
      Discover more about the country of New Zealand at{" "}
      <a href="http://www.newzealand.com/" target="_blank">
        www.newzealand.com
      </a>
    </div>
  );
};

export default About;
