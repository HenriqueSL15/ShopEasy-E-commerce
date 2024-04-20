import React from 'react'

import MainPage from './components/MainPage.jsx'

import SignUp from './components/SignUp.jsx'

import SignIn from './components/SignIn.jsx'

import ShoppingCart from './components/Shopping-cart.jsx'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App