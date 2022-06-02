import React, { createContext, useEffect, useState } from 'react'

const CartContext = createContext()

const CartProvider = (props) => {
  const [cart, setCart] = useState({
    count: 0,
    total: 0
  })

  useEffect(() => {
    const cartStorage = JSON.parse(localStorage.getItem('cart')) || []
    if (cartStorage.length > 0) {
      const count = cartStorage.length
      const total = cartStorage.reduce((acc, cur) => {
        return acc + cur.precio * cur.cantidad
      }, 0)

      setCart({ count, total })
    }
  }, [])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {props.children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
