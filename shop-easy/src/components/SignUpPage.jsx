import React from "react";
import { Link , Navigate, useNavigate} from "react-router-dom";
import '../App.css';
import { useState } from "react";
import axios from 'axios';

function SignUpPage (){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/signup',{email, password})
    .then(result => {
      console.log(result)
      navigate('/signin')
    })
    .catch(err => console.log(err))
  }

  return(
    <>
      <div className="container">
        <form onSubmit={handleSubmit} className="signUpForm">
          <h1 className="title">Sign Up</h1>

          <h3 className="subTitles">Email</h3>
          <input className="input" type="text" autoComplete="off" placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}/>

          <h3 className="subTitles">Password</h3>
          <input className="input" type="text" autoComplete="off" id='password' placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}/>

          <button className="signUpButton" type="submit">Register</button>

          <p className="text">Already Have an Account</p>
          <Link to={"/signin"}>
            <button className="alternateButton">Sign In</button>
          </Link>
        </form>
      </div>
    </>
  )
}

export default SignUpPage;