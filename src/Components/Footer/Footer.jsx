import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import logo from "../Assets/logo.png";
import twitter from "../Assets/twitter.png";
import instagram from "../Assets/instagram.png";
import facebook from "../Assets/facebook.png";

export const Footer = () => {
  return (
    <div className='Footer'>
        <div className="foot-logo">
            <img src={logo} alt="logo" width="100px" />
            <span>Espresso</span>
        </div>
        <div className="foot-links">
        <ul>
        <li ><Link style={{textDecoration: 'none', color:'black'}} to='/Orders'>Order</Link></li>
        <li ><Link style={{textDecoration: 'none', color:'black'}} to='/About'>About Us</Link></li>
        <li ><Link style={{textDecoration: 'none', color:'black'}} to='/Find'>Find Us </Link></li>
      </ul>
        </div>
        <div className="foot-icons">
            <img src={twitter} alt="" width="40px" />
            <img src={instagram} alt="" width="40px" />
            <img src={facebook} alt="" width="40px" />
        </div>
        <hr className='hori'/>
        <p className='para'>Copyright @2024 - All Right Reserved.</p>
    </div>
  )
}
