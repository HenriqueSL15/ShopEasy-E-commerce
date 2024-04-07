import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

function SignInPage (){
  return(
    <>
      <div className="container">
        <form className="signInForm">
          <h1 className="title">Sign In</h1>

          <h3 className="subTitles">Email</h3>
          <input className="input" type="text" autoComplete="off" placeholder="Username"/>

          <h3 className="subTitles">Password</h3>
          <input className="input" type="text" autoComplete="off" id='password' placeholder="Password"/>

          <button className="signInButton" type="submit">Login</button>

          <p className="text">Don't Have an Account</p>
          <Link to={"/signup"}>
            <button className="alternateButton">Sign Up</button>
          </Link>
        </form>
      </div>
    </>
  )
}

export default SignInPage;