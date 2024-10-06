import React from 'react'
import './LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className='Login-page'>
        <div className="login-card">
            <h2>Sign Up</h2>
            <input type="text" name="Your Name" placeholder='Your Name' id="n1" />
            <input type="email" name="Email Address" placeholder='Email Address' id="n2" />
            <input type="password" name="Password" placeholder='Password' id="n3" />
            <button>Continue</button>
        </div>
    </div>
  )
}
