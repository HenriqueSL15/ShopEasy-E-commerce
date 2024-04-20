import React, { useState } from 'react'
import '../App.css'

function ProductBox({productName,productWeightType, productPrice, imageLink, addProductToList}){
  
  function addToCart(){
    addProductToList(productName, productPrice)
  }
  
  return (
    <nav className='product-box'>
      <div className='container-2'>
        <img className='product-image' src={imageLink} alt="product's image" />
        <h1 className='product-name'>{productName}</h1>
        <h2 className='product-price'>R$ {productPrice}/{productWeightType}</h2>
        <div className='product-btns'>
          <button className='btn'>Comprar agora</button>
          <button className='btn' onClick={addToCart}>Adicionar ao Carrinho</button>
        </div>
      </div>
    </nav>
  )
}

export default ProductBox