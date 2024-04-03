import React from 'react'
import '../App.css'

function ProductBox({productName, productDescription, productPrice, imageLink}){
  return (
    <nav className='product-box'>
      <div className='container-2'>
        <img className='product-image' src={imageLink} alt="product's image" />
        <h1 className='product-name'>{productName}</h1>
        <p className='product-description'>
          {productDescription}
        </p>
        <h2 className='product-price'>R$ {productPrice}/kg</h2>
        <div className='product-btns'>
          <button className='btn'>Comprar agora</button>
          <button className='btn'>Adicionar ao Carrinho</button>
        </div>
      </div>
    </nav>
  )
}

export default ProductBox