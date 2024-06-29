import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingListContext } from './ShoppingCartContext.jsx';
import Header from './Header.jsx';
import Contact from './Contact.jsx';

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

function Payment() {
  //console.log(valor)
  // Carrega a shoppingList do Local Storage
  return (
    <>
      <Header />
      <div className="container">
        <div className='cart'>
          <h1 className='text'>{}</h1>
          <h1 className='text'>asdfasf</h1>
        </div>
      </div>
      <Contact />
    </>
  );
}

export default Payment;
