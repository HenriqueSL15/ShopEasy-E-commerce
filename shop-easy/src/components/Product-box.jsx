import React from 'react'
import '../App.css'
import meat1 from '../images/meat1.png'

function ProductBox(){
  return (
    <nav className='product-box'>
      <div className='container-2'>
        <img className='product-image' src={meat1} alt="product's image" />
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