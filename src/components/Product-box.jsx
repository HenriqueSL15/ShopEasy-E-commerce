import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function ProductBox({
  productName,
  productWeightType,
  productPrice,
  imageLink,
  addProductToList,
}) {
  const Navigate = useNavigate();

  function addToCart(par1) {
    addProductToList(productName, productPrice);
    if (par1 === "comprar") {
      Navigate("/payment");
    }
  }

  return (
    <nav className="product-box">
      <div className="container-2">
        <img className="product-image" src={imageLink} alt="product's image" />
        <h1 className="product-name">{productName}</h1>
        <h2 className="product-price">
          R$ {productPrice}/{productWeightType}
        </h2>
        <div className="product-btns">
          <button className="btn" onClick={addToCart}>
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </nav>
  );
}

export default ProductBox;
