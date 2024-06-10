import React, { useState, useContext , useEffect} from 'react'
import '../App.css'
import logo from '../images/SHOP.png'
import shoppingCart from '../images/shopping-cart.png'
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from "./UserContext";
import { ShoppingListContext } from './ShoppingCartContext.jsx';

function Header(){
  let quantityOfProducts = 0;
  const { shoppingList, setShoppingList } = useContext(ShoppingListContext);
  const { user, setUser } = useContext(UserContext);
  function logOut(){
    setUser(null);
    setShoppingList([]);
    Navigate('/');
  }
  
  shoppingList.forEach((a,b) => {
    quantityOfProducts++
  });

  function handleLinkClick(event, id) {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  if (user === null){
    return (
      <nav className='header'>
        <Link to={"/"}>
        <img src={logo} alt="logo" className='logo'/>
        </Link>
          <ul>
            <li><a href="/#about">About</a></li>
            <li><a href="/#contacts">Contact</a></li>
            <li><a href="/#products">Products</a></li>
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
            <li><a href="/#about">About</a></li>
            <li><a href="/#contacts">Contact</a></li>
            <li><a href="/#products">Products</a></li>
          </ul>
        <div className='header-btns'>
          <Link to={"/shopping-cart"}>
            <div className='shopping-items'>
              <img className="shopping-cart" src={shoppingCart} alt="" />
              <span className='shopping-list-number' style={{
                left: quantityOfProducts < 10 ? '42%' : '41%',
                fontSize: '24px',
                fontFamily: "PT Sans"}}>{quantityOfProducts}</span>
            </div>
          </Link>

          <Link to={"/"} onClick={logOut} className='header-btn'>Logout</Link>
        </div>
      </nav>
    )
  }
}

export default Header