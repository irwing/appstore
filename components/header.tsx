import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Img from 'next/image'

const logo = require('../public/icon.png')
const cartIcon = require('../public/cart-shopping.svg')

const Header = () => {
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    if (cart.length > 0) {
      setCartCount(cart.length)
    }
  }, [])

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <Link href="/">
            <span className='link'>
              <Img
                src={logo} alt="Cuponatric logo"
                layout='responsive'
              />
            </span>
          </Link>
        </div>
        <Link href="/cart">
          <span className='link'>
            <div className="header-cart">
                <Img
                  src={cartIcon} alt="Cart icon"
                  width={24}
                  height={24}
                />
                <span className="header-cart-count" id="header-cart-count">{cartCount}</span>
            </div>
          </span>
        </Link>
      </div>
    </header>
  )
}

export default Header
