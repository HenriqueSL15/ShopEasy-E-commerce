import React from 'react'
import '../App.css'
import logo from '../images/SHOP.png'

function Header(){
  return (
    <nav className='header'>
      <img src={logo} alt="logo" className='logo'/>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Products</a></li>
      </ul>
      <div className='header-btns'>
        <button className='header-btn'>Sign In</button>
        <button className='header-btn'>Sign Up</button>
      </div>
    </nav>
  )
}

export default Header