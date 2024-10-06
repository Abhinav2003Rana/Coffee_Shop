import React from "react";
import { Link } from "react-router-dom";
import Orderpng from "../Assets/Orderpng.png";
import './Orderbanner.css'

export const Orderbanner = () => {
  return (
    <div className="Order_banner">
      <div className="banner">
        <div className="left-banner">
          <h1>FLAT 50% OFF</h1>
          <p>
            <span>12</span>Hours<span>20</span>Mins
          </p>
          <Link to='/Login'>
            <button>Explore Now</button>
          </Link>
        </div>
        <div className="right-banner">
          <img src={Orderpng} alt="logo" />
        </div>
      </div>
    </div>
  );
};
