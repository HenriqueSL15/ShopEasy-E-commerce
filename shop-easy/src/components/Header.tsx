import React from 'react'
import '../App.css'

function Header(){
  return <>
    <nav className='header'>
      <img src="" alt="logo"className='logo'/>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Items Menu</a></li>
      </ul>
      <div>
        <button className='header-btn'>Sign In</button>
        <button className='header-btn'>Sign Up</button>
      </div>
    </nav>
  </>
}

export default Header