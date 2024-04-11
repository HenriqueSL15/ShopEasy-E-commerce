import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../App.css'
import { useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext.jsx";

function SignInPage (){
  const { setUser } = useContext(UserContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/signin',{email, password})
    .then(result => {
      console.log(result)
      if(result.data === "The Password is Incorrect"){
        console.log('The Password is Incorrect')
      }else if(result.data === "No Record Existed"){
        console.log('No Record Existed')
      }else{
        setUser(result.data)
        navigate('/')
      }
    })
    .catch(err => console.log(err))
  }

  return(
    <>
      <div className="container">
        <form onSubmit={handleSubmit} className="signInForm">
          <h1 className="title">Sign In</h1>

          <h3 className="subTitles">Email</h3>
          <input className="input" type="text" autoComplete="off" placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}/>

          <h3 className="subTitles">Password</h3>
          <input className="input" type="text" autoComplete="off" id='password' placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}/>

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