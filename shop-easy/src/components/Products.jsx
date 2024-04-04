import {React, useEffect, useState } from 'react'
import '../App.css'
import ProductBox from './Product-box.jsx'

//Products Types
import Groceries from './Groceries.jsx'
import Hortifruti from './Hortifruti.jsx'
import Drinks from './Drinks.jsx'

//Groceries
import rice from '../images/Groceries/rice.png'
import bean from '../images/Groceries/bean.jpg'
import milk from '../images/Groceries/milk.jpeg'
import oil from  '../images/Groceries/oil.jpg'

//Hortifruti
import banana from '../images/Hortifruti/banana.jpg'
import potato from '../images/Hortifruti/potato.jpg'
import greenLemon from '../images/Hortifruti/green_lemon.jpg'
import carrot from '../images/Hortifruti/carrot.png'

//Meats
import meat1 from '../images/Meats/meat1.png'

//Drinks
import cocaCola from '../images/Drinks/coca_cola.png'
import water from '../images/Drinks/water.jpg'
import grapeJuice from '../images/Drinks/grapeJuice.jpg'


function Products(){
  let groceriesUrl = [];
  let hortifrutiUrl = [];
  let drinksUrl = [];

  const [products, setProducts] = useState('');

  groceriesUrl = [rice,bean,milk,oil]
  hortifrutiUrl = [banana,potato,greenLemon,carrot]
  drinksUrl = [cocaCola,water,grapeJuice]
  
  function clicked(param){
    setProducts(param);
  }

  return <>
    <nav className='products'>
      <div className='container-1'>
        <h1>Products</h1>
        <ul className='products-categories'>
          <button onClick={() => clicked('groceries')}>Groceries</button>
          <button onClick={() => clicked('drinks')}>Drinks</button>
          <button onClick={() => clicked('meats')}>Meats</button>
          <button onClick={() => clicked('hortifruti')}>Hortifruti</button>
          <button onClick={() => clicked('bakery')}>Bakery</button>
          <button onClick={() => clicked('cleaningProducts')}>Cleaning Products</button>
        </ul>
      </div>
      <div className='container-2 row'>
        {products === 'groceries' && (
          Object.entries(Groceries).map(([key, value],index) => {
            console.log(value[1])
            return <>
              <ProductBox key={key} productName={key} productWeightType={value.weightType} productPrice={value.price} imageLink={groceriesUrl[index]}></ProductBox>
            </>
          }))}

        {products === 'hortifruti' && (
          Object.entries(Hortifruti).map(([key, value],index) => {
            return <>
              <ProductBox key={key} productName={key} productWeightType={value.weightType} productPrice={value.price} imageLink={hortifrutiUrl[index]}></ProductBox>
            </>
          }))}
        
        {products === 'drinks' && (
          Object.entries(Drinks).map(([key, value],index) => {
            return <>
              <ProductBox key={key} productName={key} productWeightType={value.weightType} productPrice={value.price} imageLink={drinksUrl[index]}></ProductBox>
            </>
          }))}
      </div>
    </nav>
  </>
}

export default Products