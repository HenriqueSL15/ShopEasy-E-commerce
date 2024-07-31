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

  const updateUser = async (updatedUser) => {
    try {
      const response = await fetch(
        `http://localhost:3001/update/${user.email}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        }
      );

      if (response.ok) {
        const newUser = await response.json();
        setUser(newUser); // Atualiza o estado no UserContext
        console.log("User updated successfully:", newUser);
      } else {
        console.error("Failed to update user");
      }
    } catch (err) {
      console.error("Error updating user:", err);
    }
  };

  useEffect(() => {
    // Atualiza o estado quando o usuário mudar
    setAvailableMoney(user.money);
    updateUser(user);
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
