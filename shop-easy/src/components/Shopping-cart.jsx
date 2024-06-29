import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingListContext } from './ShoppingCartContext.jsx';
import Header from './Header';
import Contact from './Contact';

// Função para salvar no Local Storage
const saveToLocalStorage = (key, data) => {
  if (Array.isArray(data)) {
    localStorage.setItem(key, JSON.stringify(data));
  } else {
    console.error("Erro: Data para salvar no Local Storage não é um array.");
  }
};

// Função para carregar do Local Storage
const loadFromLocalStorage = (key) => {
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : []; // Retorna um array vazio se não houver dados
};

function ShoppingCart() {
  // Carrega a shoppingList do Local Storage
  let somaInteira = 0
  let somaDecimal = 0
  let valorFinal = ''
  const initialShoppingList = loadFromLocalStorage('shoppingList'); // Garantir que seja um array
  const { shoppingList, setShoppingList } = useContext(ShoppingListContext);
  const [items, setItems] = useState(initialShoppingList || []);

  function isDecimal(num) {
    return num % 1 !== 0;
  }

  // Efeito para persistir shoppingList no Local Storage
  useEffect(() => {
    saveToLocalStorage('shoppingList', items); // Verifica se `items` é um array
  }, [items]);

  // Atualiza `items` quando `shoppingList` é alterada
  useEffect(() => {
    if (Array.isArray(shoppingList)) { // Verifique se `shoppingList` é um array
      setItems(shoppingList); // Atualiza `items` se `shoppingList` for válido
    } else {
      console.error("Erro: shoppingList não é um array.");
    }
  }, [shoppingList]);

  // Função para remover um produto do carrinho
  const removeProduct = (index) => {
    if (Array.isArray(items)) { // Verifique se `items` é um array
      const updatedItems = [...items];
      updatedItems.splice(index, 1);
      setItems(updatedItems);
      setShoppingList(updatedItems); // Atualiza o contexto
    } else {
      console.error("Erro: `items` não é um array.");
    }
  };

  shoppingList.forEach((object,indice) => {
    const item1 = String(object.productPrice).split(",")[0]
    const item2 = String(object.productPrice).split(",")[1]

    somaDecimal += Number(item2)
    somaInteira += Number(item1)
  })

  let conversao = somaDecimal / 100
  somaInteira += conversao
  somaDecimal = 0

  if(!isDecimal(somaInteira)){
    valorFinal = String(somaInteira).split(".")[0] + ",00"
  }else{
    valorFinal = String(somaInteira).split(".")[0] + "," + String(somaInteira).split(".")[1] + "0"
  }

  return (
    <>
      <Header />
      <div className="container">
        {Array.isArray(items) && items.length > 0 ? (
          <>
            <div className="cart">
              {items.map((value, index) => (
                <div className="cartItem text" key={index}>
                  <h1>{value.productName}</h1>
                  <h1>R${value.productPrice}</h1>
                  <button onClick={() => removeProduct(index)}>Remove</button>
                </div>
              ))}
            </div>
            <div className="buyingOptions text">
              <h1>INFORMATION:</h1>
              <h3>You are buying {shoppingList.length} items</h3>
              <h3>The total price of all the items is R${valorFinal}</h3>
              <div className='buttons'>
                <Link to="/payment" className='buttonsOption'>
                  <p>In cash</p>
                </Link>
                <Link to="/payment" className='buttonsOption'>
                  <p>In installments</p>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className="cart-centered">
            <h1 className="text">There aren't any products.</h1>
            <Link to="/" className='header-btn'>Go back to the main page</Link>
          </div>
        )}
      </div>
      <Contact />
    </>
  );
}

export default ShoppingCart;
