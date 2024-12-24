import React, { createContext, useState, useEffect } from "react";

// Função para salvar dados no Local Storage
const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Função para carregar dados do Local Storage
const loadFromLocalStorage = (key) => {
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : null;
};

// Criar o contexto para o estado do usuário
const UserContext = createContext();

const UserProvider = ({ children }) => {
  // Inicializa o estado do usuário com dados do Local Storage
  const [user, setUser] = useState(loadFromLocalStorage("loggedUser"));

  useEffect(() => {
    const storedUser = loadFromLocalStorage("loggedUser");

    if (user) {
      if (!storedUser) {
        console.log("Salvando pela primeira vez");
        saveToLocalStorage("loggedUser", user);
      } else if (user._id !== storedUser._id) {
        console.log("Salvando");
        saveToLocalStorage("loggedUser", user);
      }
    } else if (storedUser) {
      console.log("Retirando");
      localStorage.removeItem("loggedUser");
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
