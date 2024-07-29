import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "./UserContext.jsx";
import Header from "./Header.jsx";
import Contact from "./Contact.jsx";

function Payment() {
  const location = useLocation();
  const { times, valor } = location.state || {};
  const { user, setUser } = useContext(UserContext);

  const [availableMoney, setAvailableMoney] = useState(user.money);

  useEffect(() => {
    // Atualiza o estado quando o usuário mudar
    setAvailableMoney(user.money);
    console.log(user.money);
  }, [user.money]);

  function takeMoney() {
    // Converte o valor para um número flutuante
    const normalizedValue = parseFloat(valor.replace(",", "."));

    // Atualiza o estado do usuário
    setUser((prevUser) => {
      const updatedUser = {
        ...prevUser,
        money: prevUser.money - normalizedValue,
      };
      return updatedUser;
    });

    // Atualiza o estado local
    setAvailableMoney((prevMoney) => prevMoney - normalizedValue);
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="cart" id="payment">
          <h1 className="text">In how many times: {times}</h1>
          <h1 className="text">Total: R${valor}</h1>
          <h1 className="text">
            Total Available: R${availableMoney.toFixed(2)}
          </h1>
          <div className="button-container">
            <button
              style={{ fontSize: "25px" }}
              className="btn"
              onClick={takeMoney}
            >
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
