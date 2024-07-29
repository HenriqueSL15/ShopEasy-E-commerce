import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./components/UserContext.jsx";
import { ShoppingListProvider } from "./components/ShoppingCartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <ShoppingListProvider>
        <App />
      </ShoppingListProvider>
    </UserProvider>
  </React.StrictMode>
);
