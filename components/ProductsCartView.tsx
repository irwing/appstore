import React, { useState, useEffect } from 'react'
import { ProductCardCart } from './ProductCardCart'
// TODO: *** ADD types

export const ProductsCartView = () => {
  const [products, setProducts] = useState([])

  // TODO: *** REFACTOR optimize double inital fecth
  // TODO: *** REFACTOR extract fetch to a service
  // TODO: *** REFACTOR add url to fetch from env
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const idsProducts = cart.reduce((acc, product) => {
      acc.push(product.id_empresa)
      return acc
    }, [])

    const url = 'http://localhost:3000/api/products/find'
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ids: idsProducts
      })
    })
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <>
      <div className="products-list">
        {products.map(product => (
            <ProductCardCart key={product.id_empresa} product={product} />
        ))}
      </div>
    </>
  )
}
module.exports = { ProductsCartView }
