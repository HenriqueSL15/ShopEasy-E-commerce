import { React , useContext, useState, useEffect} from 'react'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import { ShoppingListContext } from "./ShoppingCartContext.jsx"
import Header from './Header';
import { Link } from 'react-router-dom';

import Contact from './Contact';
function ShoppingCart() {

  function removeProduct(index){
    items.splice(index,1)
    console.log(items)
  }

  const tipos = [
    "Arroz Branco",
    "Feijão",
    "Leite",
    "Óleo",
    "Coca-Cola",
    "Água Mineral",
    "Suco de Uva",
    "Red Bull",
    "Picanha",
    "Alcatra",
    "Contrafilé",
    "Fraldinha",
    "Banana",
    "Batata",
    "Limão Verde",
    "Cenoura",
    "Bolo de Chocolate",
    "Pão Francês",
    "Pão de Queijo",
    "Cookies",
    "Álcool",
    "Detergente",
    "Sabão em Pó",
    "Água Sanitária"
  ]

  let i = 0
  const { shoppingList, setShoppingList} = useContext(ShoppingListContext)
  let [ items, setItems] = useState([])
  useEffect(() => {
    if (shoppingList !== null) {
      setItems(Object.values(shoppingList));
    }
  }, [shoppingList]);

  if(shoppingList !== null){
    return (
      <>
        <Header></Header>
        <div className="container">
          <div className='cart'>
            {
              items.map((value,index) => {
                console.log(value)
                return (
                  <>
                    <div className='cartItem text'>
                      <h1>{value.productName}</h1>
                      <h1>R${value.productPrice}</h1>
                      <button onClick={() => removeProduct(index)}>Remove</button>
                    </div>
                  </>
                )
              })
            }
          </div>
          <div className='buyingOptions text'>
            <h1>INFORMATION:</h1>
          </div>
        </div>
        <Contact></Contact>
      </>
    )
  }else{
    return (
      <>
        <Header></Header>
        <div className="container">
          <div className='cart-centered'>
            <h1 className='text'>There aren't any products.</h1>
            <Link to={"/"} className='header-btn'>Go back to main page</Link>
          </div>
        </div>
        <Contact></Contact>
      </>
    )
  }
}

export default ShoppingCart

/*
{
              shoppingList.map((value,index) => {
                return (
                  <>
                    
                  </>
                )
              })
            }
*/