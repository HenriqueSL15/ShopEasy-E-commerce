import React, { createContext, useState } from "react";

const ShoppingListContext = createContext();

const ShoppingListProvider = ({ children }) => {
  const [shoppingList, setShoppingList] = useState(null);

  return (
    <ShoppingListContext.Provider value={{ shoppingList, setShoppingList }}>
      {children}
    </ShoppingListContext.Provider>
  );
};

export { ShoppingListProvider, ShoppingListContext };