import React, { createContext, useState, useEffect } from "react";

// Funções para salvar e carregar do Local Storage
const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const loadFromLocalStorage = (key) => {
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : []; // Retorna um array vazio se não houver dados
};

// Criar o contexto para a lista de compras
const ShoppingListContext = createContext();

const ShoppingListProvider = ({ children }) => {
  // Inicializa a lista com dados do Local Storage ou um array vazio
  const [shoppingList, setShoppingList] = useState(loadFromLocalStorage("shoppingList"));

  // Efeito para persistir a lista no Local Storage quando ela muda
  useEffect(() => {
    saveToLocalStorage("shoppingList", shoppingList);
  }, [shoppingList]);

  return (
    <ShoppingListContext.Provider value={{ shoppingList, setShoppingList }}>
      {children}
    </ShoppingListContext.Provider>
  );
};

export { ShoppingListProvider, ShoppingListContext };
