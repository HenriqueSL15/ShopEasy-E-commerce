import React from 'react'
import '../App.css'
import peopleWorking from '../images/people-working.jpg';

function About({ id }){
  return (
    <nav className='about' id={id}>
      <div className='left-site-about'>
        <h1 className='title'>About Us!</h1>
        <p className='description'>
        Welcome to Shop Easy, your trusted online store where convenience and quality meet. We are dedicated to providing an easy, fast and secure shopping experience for all of our customers. At Shop Easy, we understand that life can be busy and your time is valuable. That's why we work hard to make sure you find exactly what you're looking for, in just a few clicks. Welcome to the Shop Easy family!
        </p>
      </div>
      <div className='right-site-about'>
        <img src={peopleWorking} alt="" />
      </div>
    </nav>
  )
}

export default About