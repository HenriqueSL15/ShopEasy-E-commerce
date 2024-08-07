import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingListContext } from "./ShoppingCartContext.jsx";
import Header from "./Header";
import Contact from "./Contact";

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
  let times = 9999;
  const navigate = useNavigate();
  const popup = document.getElementById("popup");
  const paymentTimes = document.getElementById("paymentTimes");
  let somaInteira = 0;
  let somaDecimal = 0;
  let valorFinal = "";
  const initialShoppingList = loadFromLocalStorage("shoppingList"); // Garantir que seja um array
  const { shoppingList, setShoppingList } = useContext(ShoppingListContext);
  const [items, setItems] = useState(initialShoppingList || []);

  function handlePopup(open, type) {
    if (popup) {
      if (open) {
        popup.classList.add("opened");
      } else {
        popup.classList.remove("opened");
      }
    }
  }

  function send(type) {
    if (type == "in cash") {
      times = 1;
    } else if (type == "in installments") {
      if (paymentTimes.value !== "?") {
        times = paymentTimes.value;
      } else {
        times = "ERROR";
      }
    }
    const data = { times: times, valor: valorFinal };
    if (times !== "ERROR") {
      navigate("/payment", { state: data });
    } else {
      console.log("Valor inválido, tente novamente!");
    }
  }

  function isDecimal(num) {
    return num % 1 !== 0;
  }

  // Efeito para persistir shoppingList no Local Storage
  useEffect(() => {
    saveToLocalStorage("shoppingList", items); // Verifica se `items` é um array
  }, [items]);

  // Atualiza `items` quando `shoppingList` é alterada
  useEffect(() => {
    if (Array.isArray(shoppingList)) {
      // Verifique se `shoppingList` é um array
      setItems(shoppingList); // Atualiza `items` se `shoppingList` for válido
    } else {
      console.error("Erro: shoppingList não é um array.");
    }
  }, [shoppingList]);

  // Função para remover um produto do carrinho
  const removeProduct = (index) => {
    if (Array.isArray(items)) {
      // Verifique se `items` é um array
      const updatedItems = [...items];
      updatedItems.splice(index, 1);
      setItems(updatedItems);
      setShoppingList(updatedItems); // Atualiza o contexto
    } else {
      console.error("Erro: `items` não é um array.");
    }
  };

  shoppingList.forEach((object, indice) => {
    const item1 = String(object.productPrice).split(",")[0];
    const item2 = String(object.productPrice).split(",")[1];

    somaDecimal += Number(item2);
    somaInteira += Number(item1);
  });

  let conversao = somaDecimal / 100;
  somaInteira += conversao;
  somaDecimal = 0;

  if (!isDecimal(somaInteira)) {
    valorFinal = String(somaInteira).split(".")[0] + ",00";
  } else {
    valorFinal =
      String(somaInteira).split(".")[0] +
      "," +
      String(somaInteira).split(".")[1] +
      "0";
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
              <div className="buttons">
                <button
                  className="buttonsOption"
                  onClick={() => send("in cash")}
                >
                  <p>In cash</p>
                </button>
                <button
                  className="buttonsOption"
                  onClick={() => handlePopup(true)}
                >
                  <p>In installments</p>
                </button>
                <div className="popup" id="popup">
                  <h1 className="popup-title">
                    In how many times do you want to pay?
                  </h1>
                  <select id="paymentTimes">
                    <option value="?">SELECT</option>
                    <option value="2">2 Times</option>
                    <option value="3">3 Times</option>
                    <option value="4">4 Times</option>
                    <option value="5">5 Times</option>
                    <option value="6">6 Times</option>
                    <option value="7">7 Times</option>
                  </select>
                  <button
                    className="close-popup"
                    type="submit"
                    onClick={() => send("in installments")}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="cart-centered">
            <h1 className="text">There aren't any products.</h1>
            <Link to="/" className="header-btn">
              Go back to the main page
            </Link>
          </div>
        )}
      </div>
      <Contact />
    </>
  );
}

export default ShoppingCart;
