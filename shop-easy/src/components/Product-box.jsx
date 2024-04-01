import React from 'react'
import '../App.css'

function ProductBox({imageLink}){
  return (
    <nav className='product-box'>
      <div className='container-2'>
        <img className='product-image' src={imageLink} alt="product's image" />
        <h1 className='product-name'>Picanha</h1>
        <p className='product-description'>
          Carne de altíssima qualidade, com incrível sabor e altos níveis de nutrientes.
        </p>
        <h2 className='product-price'>R$ 93,00/kg</h2>
        <div className='product-btns'>
          <button className='btn'>Comprar agora</button>
          <button className='btn'>Adicionar ao Carrinho</button>
        </div>
      </div>
    </nav>
  )
}

export default ProductBox