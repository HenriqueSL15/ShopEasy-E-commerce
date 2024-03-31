import React from 'react'
import '../App.css'
import ProductBox from './Product-box.jsx'


function Products(){
  return <>
    <nav className='products'>
      <div className='container-1'>
        <h1>Products</h1>
        <ul className='products-categories'>
          <li>Spices</li>
          <li>Meats</li>
          <li>Fruits And Vegetables</li>
          <li>Cleaning Products</li>
        </ul>
      </div>
      <div className='container-2 row'>
        <ProductBox></ProductBox>
        <ProductBox></ProductBox>
        <ProductBox></ProductBox>
        <ProductBox></ProductBox>
        <ProductBox></ProductBox>
        <ProductBox></ProductBox>
        <ProductBox></ProductBox>
        <ProductBox></ProductBox>
        <ProductBox></ProductBox>
      </div>
    </nav>
  </>
}

export default Products