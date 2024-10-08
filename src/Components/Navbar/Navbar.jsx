import React, { useState } from "react";
import logo from "../Assets/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import side from "../Assets/sidebar.png";
import cross from "../Assets/close.png"


export const Navbar = () => {
  const [menu, setmenu] = useState("cafe");
  let [val , setval] = useState("")
  let [ig,setig] = useState(side)
  
  return (
    <div className="nav-bar">
      <div className="logo">
        <img src={logo} alt="logo" width="80px" />
        <p>Espresso</p>
      </div>

      <ul className={val} id="first" >
        <li
          onClick={() => {
            setmenu("cafe");
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/Coffee_Shop"
          >
            Cafe
          </Link>
          {menu === "cafe" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("order");
          }}
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="/Orders">
            Order
          </Link>
          {menu === "order" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("about");
          }}
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="/About">
            About Us
          </Link>
          {menu === "about" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("find");
          }}
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="/Find">
            Find Us{" "}
          </Link>
          {menu === "find" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/Login">
          <button>Buy Gift Vouchers</button>
        </Link>
      </div>
      <div className="menu" onClick={()=>{val ===""?setval("hamul"):setval("");ig===side?setig(cross):setig(side)}}>
        <img src={ig} alt="" width="30px" />
      </div>
    </div>
  );
};
