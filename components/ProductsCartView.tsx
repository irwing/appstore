import React, { useState, useEffect } from 'react'
import ProductCardCart from './ProductCardCart'
import { TypeCartList } from '../typings/TypeCart'
import Empty from './Empty'
import lang from '../lang'

const HOSTNAME = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 3000

export const ProductsCartView = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    const cart:TypeCartList = JSON.parse(localStorage.getItem('cart')) || []

    const ids:number[] = cart.reduce((acc, product) => {
      acc.push(product.id_empresa)
      return acc
    }, [])

    setCart(cart)

    const url:string = `http://${HOSTNAME}:${PORT}/api/products/find`
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ids })
    })
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (cart.length === 0)
    ? (<Empty />)
    : (
        <>
          <p>{lang.cartTitleProducts}</p>
          <div className="products-list">
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
