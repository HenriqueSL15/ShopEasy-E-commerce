import React from "react";

import MainPage from "./components/mainPage.jsx";

import SignUp from "./components/SignUp.jsx";

import SignIn from "./components/SignIn.jsx";

import Payment from "./components/Payment.jsx";

import ShoppingCart from "./components/Shopping-cart.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
