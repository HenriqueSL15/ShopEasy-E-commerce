import React, { useState, useContext } from 'react'
import '../App.css'
import logo from '../images/SHOP.png'
import { Link } from 'react-router-dom';
import { UserContext } from "./UserContext";

function Header(){
  const { user, setUser } = useContext(UserContext);
  function logOut(){
    setUser(null);
    window.location.reload();
  }

  if (user === null){
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
  }else{
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
          <h1 className='userText'>Welcome, {user.email}</h1>
          <Link to={"/"} onClick={logOut} className='header-btn'>Logout</Link>
        </div>
      </nav>
    )
  }
}

export default Header