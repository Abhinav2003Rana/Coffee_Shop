import React from 'react'
import gift from '../Assets/gift.png'
import './Gift.css'
import { Link } from 'react-router-dom'

export const Gift = () => {
  return (
    <div className='gift'>
        <div className="left-gift">
            <img src={gift} alt="" />
        </div>
        <div className="right-gift">
            <h1>Buy Gift & Vouchers</h1>
            <p>apply vouchers </p>
            <Link to='/Login'><button>Check Now</button></Link>
        </div>
    </div>
  )
}
