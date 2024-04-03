import {React, useEffect, useState } from 'react'
import '../App.css'
import ProductBox from './Product-box.jsx'
import Grains from './Grains.jsx'

import rice from '../images/rice1.png'
import bean from '../images/bean1.jpg'

import banana from '../images/banana1.jpg'

import meat from '../images/meat1.png'


function Products(){
  let productUrl = [];
  let opcoes = ['spices', 'meats', 'fruitsAndVegetables', 'cleaningProducts'];
  const [products, setProducts] = useState('');
  productUrl = [rice,bean,banana,meat]
  const [itens, setItens] = useState([]);
  console.log(productUrl)

  function clicked(param){
    opcoes.map((value,index) => {
      if(param === value){
        setProducts(param)
      }
    })
  }

  return <>
    <nav className='products'>
      <div className='container-1'>
        <h1>Products</h1>
        <ul className='products-categories'>
          <button onClick={() => clicked('spices')}>Spices</button>
          <button onClick={() => clicked('meats')}>Meats</button>
          <button onClick={() => clicked('fruitsAndVegetables')}>Fruits And Vegetables</button>
          <button onClick={() => clicked('cleaningProducts')}>Cleaning Products</button>
        </ul>
      </div>
      <div className='container-2 row'>
        {
          Object.entries(Grains).map(([key, value],index) => {
            return <>
              <ProductBox key={key} productName={key} productPrice={value.price} productDescription={value.description} imageLink={productUrl[index]}></ProductBox>
            </>
          })
        }
      </div>
    </nav>
  </>
}

export default Products