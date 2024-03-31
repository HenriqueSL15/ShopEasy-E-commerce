import React from 'react'
import './App.css'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Products from './components/Products.jsx'

function App() {
  return (
    <>
      <Header></Header>
      <About></About>
      <Products></Products>
      <Contact></Contact>
    </>
  )
}

export default App