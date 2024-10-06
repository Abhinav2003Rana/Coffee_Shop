import React from "react";
import logo from "../Assets/logo.png";
import hero from "../Assets/hero.png";
import "./Hero.css";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="hero-left-logo">
          <h1 className="head">Espressos Deliciious Coffe</h1>
          <img src={logo} alt="logo" width="80px" />
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur numquam odit qui voluptatibus
          nihil optio?
        </p>
        <div className="btns">
          <Link to="/Login">
            <button className="black-btn">Order</button>
          </Link>
          <Link to="/Login">
            <button className="white-btn">Login/Signup</button>
          </Link>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero} alt="hero" />
      </div>
    </div>
  );
};
