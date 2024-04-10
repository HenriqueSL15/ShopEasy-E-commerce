import React, { useState } from 'react'
import '../App.css'
import logo from '../images/SHOP.png'
import { Link } from 'react-router-dom';

function Header(user){
  const [userName,setUserName] = useState("");
  if(user === ""){
    console.log("Não tem user")
  }
  return (
    <nav className='header'>
      <Link to={"/"}>
      <img src={logo} alt="logo" className='logo'/>
      </Link>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Products</a></li>
      </ul>
      <div className='header-btns'>
        <Link to={"/signin"} className='header-btn'>
          Sign In
        </Link>
        <Link to={"/signup"} className='header-btn'>
          Sign Up
        </Link>
      </div>
    </nav>
  )
}

export default Header