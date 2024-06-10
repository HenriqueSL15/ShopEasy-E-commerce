import React from 'react'
import '../App.css'
import logo from '../images/SHOP.png'

function Contact({ id }){
  return (
    <nav className='contact' id={id}>
      <img src={logo} alt="logo" className='logo contact-logo'/>
      <div className='contact-info'>
        <a href="/#about"><h1 className='contact-link'>About Us</h1></a>
        <a href="/#products"><h1 className='contact-link'>Products</h1></a>
        <ul className='contact-list'>
          <h1>Contact Info</h1>
          <li>Phone:+55 (16)1111-1111</li>
          <li>Email: exampleemail@gmail.com</li>
          <li>Address: example adress</li>
        </ul>
      </div>
    </nav>
  )
}

export default Contact