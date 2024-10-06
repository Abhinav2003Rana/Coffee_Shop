import React from "react";
import "./Aboutus.css"
import drink from "../Assets/Drink.png"
import { Link } from "react-router-dom";

export const Aboutus = () => {
  return (
    <div className="about">
      <div className="left-about">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolore
          sint, neque aliquid voluptate aspernatur itaque maiores in, explicabo
          quo officia sequi officiis ut ea dolorum molestias laborum. Totam,
          reiciendis. Cum commodi iusto harum, quia voluptate eum rem iure enim
          vitae, sit aliquid aspernatur quasi?
        </p>
        <Link to="/Login"><button>Login</button></Link>
      </div>
      <div className="right-about">
        <img src={drink} alt="" />
      </div>
    </div>
  );
};
