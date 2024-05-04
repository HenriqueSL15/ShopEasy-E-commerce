import React, { createContext, useState, useEffect } from 'react';

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
  const [user, setUser] = useState(loadFromLocalStorage('loggedUser'));

  // UseEffect para salvar o estado do usuário no Local Storage quando ele muda
  useEffect(() => {
    if (user) {
      saveToLocalStorage('loggedUser', user); // Persistir se o usuário estiver logado
    } else {
      localStorage.removeItem('loggedUser'); // Remover do Local Storage se o usuário fizer logout
    }
  }, [user]); // O efeito é acionado quando `user` muda

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
