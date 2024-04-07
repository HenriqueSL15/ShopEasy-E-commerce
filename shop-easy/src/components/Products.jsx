import {React, useEffect, useState } from 'react'
import '../App.css'
import ProductBox from './Product-box.jsx'

//Products Types
import Groceries from './Products/Groceries.jsx'
import Hortifruti from './Products/Hortifruti.jsx'
import Drinks from './Products/Drinks.jsx'
import Meats from './Products/Meats.jsx'
import Bakery from './Products/Bakery.jsx'
import cleaningProducts from './Products/Cleaning Products.jsx'

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
import picanha from '../images/Meats/picanha.jpg'
import alcatra from '../images/Meats/alcatra.jpg'
import contrafile from '../images/Meats/contrafile.jpg'
import fraldinha from '../images/Meats/fraldinha.jpg'

//Drinks
import cocaCola from '../images/Drinks/coca_cola.png'
import water from '../images/Drinks/water.jpg'
import grapeJuice from '../images/Drinks/grape_juice.jpg'
import redBull from '../images/Drinks/red_bull.jpg'

//Bakery
import chocolateCake from '../images/Bakery/chocolate_cake.jpg'
import bread from '../images/Bakery/bread.jpg'
import cheeseBread from '../images/Bakery/cheese_bread.jpg'
import cookies from '../images/Bakery/cookies.jpg'

//Cleaning Products
import alcohol from '../images/Cleaning Products/alcohol.png'
import detergent from '../images/Cleaning Products/detergent.jpg'
import soapDust from '../images/Cleaning Products/soap_dust.jpg'
import sanitaryWater from '../images/Cleaning Products/sanitary_water.jpg'


function Products(){
  let cleaningProductsUrl = [];
  let bakeryUrl = [];
  let meatsUrl = [];
  let groceriesUrl = [];
  let hortifrutiUrl = [];
  let drinksUrl = [];

  const [products, setProducts] = useState('groceries');
  const [productsList, setProductsList] = useState([]);

  cleaningProductsUrl = [alcohol,detergent, soapDust, sanitaryWater]
  bakeryUrl = [chocolateCake, bread, cheeseBread, cookies]
  meatsUrl = [picanha, alcatra, contrafile, fraldinha]
  groceriesUrl = [rice,bean,milk,oil]
  hortifrutiUrl = [banana,potato,greenLemon,carrot]
  drinksUrl = [cocaCola,water,grapeJuice,redBull]
  
  function clicked(param){
    setProducts(param);
  }

  function addProductToList(productName){
    console.log("Produto: "+productName+" de ID : " +  " foi adicionado ao carrinho com sucesso!");
    productsList.push(productName)
    console.log(productsList);
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
            return <>
              <ProductBox key={key} addProductToList={addProductToList} productName={key} productWeightType={value.weightType} productPrice={value.price} imageLink={groceriesUrl[index]}></ProductBox>
            </>
          }))}

        {products === 'drinks' && (
          Object.entries(Drinks).map(([key, value],index) => {
            return <>
              <ProductBox key={key} addProductToList={addProductToList} productName={key} productWeightType={value.weightType} productPrice={value.price} imageLink={drinksUrl[index]}></ProductBox>
            </>
          }))}

        {products === 'meats' && (
          Object.entries(Meats).map(([key, value],index) => {
            return <>
              <ProductBox key={key} addProductToList={addProductToList} productName={key} productWeightType={value.weightType} productPrice={value.price} imageLink={meatsUrl[index]}></ProductBox>
            </>
          }))}

        {products === 'hortifruti' && (
          Object.entries(Hortifruti).map(([key, value],index) => {
            return <>
              <ProductBox key={key} addProductToList={addProductToList} productName={key} productWeightType={value.weightType} productPrice={value.price} imageLink={hortifrutiUrl[index]}></ProductBox>
            </>
          }))}

        {products === 'bakery' && (
          Object.entries(Bakery).map(([key, value],index) => {
            return <>
              <ProductBox key={key} addProductToList={addProductToList} productName={key} productWeightType={value.weightType} productPrice={value.price} imageLink={bakeryUrl[index]}></ProductBox>
            </>
          }))}

        {products === 'cleaningProducts' && (
          Object.entries(cleaningProducts).map(([key, value],index) => {
            return <>
              <ProductBox key={key} addProductToList={addProductToList} productName={key} productWeightType={value.weightType} productPrice={value.price} imageLink={cleaningProductsUrl[index]}></ProductBox>
            </>
          }))}
      </div>
    </nav>
  </>
}

export default Products