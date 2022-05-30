import React, { useState, useEffect } from 'react'
import { ProductCardCart } from './ProductCardCart'
// TODO: *** ADD types

export const ProductsCartView = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  // TODO: *** REFACTOR optimize double inital fecth
  // TODO: *** REFACTOR extract fetch to a service
  // TODO: *** REFACTOR add url to fetch from env
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const idsProducts = cart.reduce((acc, product) => {
      acc.push(product.id_empresa)
      return acc
    }, [])

    setCart(cart)

    const url = 'http://localhost:3000/api/products/find'
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ids: idsProducts })
    })
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <>
      <div className="products-list">
        {cart.length === 0 && (
          <div className="products-list-empty">
            <p>No hay productos en el carrito</p>
          </div>
        )}
        {products.length > 0 && products.map(product => {
          product.cantidad = cart.find(cartProduct => cartProduct.id_empresa === product.id_empresa).cantidad

          return (
            <ProductCardCart key={product.id_empresa} product={product} />
          )
        })}
      </div>
    </>
  )
}
module.exports = { ProductsCartView }
