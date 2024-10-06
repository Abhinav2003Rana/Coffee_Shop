import React from 'react'
import coldcoffee from "../Assets/Coldcoffee.png"
import "./Offers.css"
import { Link } from 'react-router-dom'

export const Offers = () => {
  return (
    <div className='offer'>
        <div className="left-offer">
            <img src={coldcoffee} alt="" width="500px" />
        </div>
        <div className="right-offer">
            <h1>Cold Coffee</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, iusto?</p>
            <Link to="/Orders"><button>Explore</button></Link>
        </div>
    </div>
  )
}
