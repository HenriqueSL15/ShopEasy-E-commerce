import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingListContext } from "./ShoppingCartContext.jsx";
import { UserContext } from "./UserContext.jsx";
import Header from "./Header.jsx";
import Contact from "./Contact.jsx";

// // Função para salvar no Local Storage
// const saveToLocalStorage = (key, data) => {
//   if (Array.isArray(data)) {
//     localStorage.setItem(key, JSON.stringify(data));
//   } else {
//     console.error("Erro: Data para salvar no Local Storage não é um array.");
//   }
// };

// // Função para carregar do Local Storage
// const loadFromLocalStorage = (key) => {
//   const storedData = localStorage.getItem(key);
//   return storedData ? JSON.parse(storedData) : []; // Retorna um array vazio se não houver dados
// };

function Payment() {
  const location = useLocation();
  const { times, valor } = location.state || {};
  const { user, setUser } = useContext(UserContext);

  console.log(user);
  // console.log(setUser());
  // Carrega a shoppingList do Local Storage
  return (
    <>
      <Header />
      <div className="container">
        <div className="cart" id="payment">
          <h1 className="text">In how many times: {times}</h1>
          <h1 className="text">Total: R${valor}</h1>
          <h1 className="text">Total Avaible: R${valor}</h1>
          <div className="button-container">
            <button style={{ fontSize: "25px" }} className="btn">
              Confirm payment
            </button>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}

export default Payment;
