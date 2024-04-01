import {React, useEffect, useState } from 'react'
import '../App.css'
import ProductBox from './Product-box.jsx'
import meat1 from '../images/meat1.png'

function Products(){
  let opcoes = ['spices', 'meats', 'fruitsAndVegetables', 'cleaningProducts'];
  const [products, setProducts] = useState('');
  console.log(products)
  const [itens, setItens] = useState([]);

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
          <ProductBox imageLink={meat1}/>
          <ProductBox imageLink={meat1}/>
      </div>
    </nav>
  </>
}

export default Products