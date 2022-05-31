import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Img from 'next/image'
import logo from '../public/icon.png'
import cartIcon from '../public/cart-shopping.svg'
import lang from '../lang'
import { TypeCartList } from '../typings/TypeCart'

const Header = () => {
  const [cartCount, setCartCount] = useState<number>(0)

  useEffect(() => {
    const cart:TypeCartList = JSON.parse(localStorage.getItem('cart')) || []
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
                src={logo} alt={lang.altLogo}
                layout='responsive'
              />
            </span>
          </Link>
        </div>
        <Link href="/cart">
          <span className='link'>
            <div className="header-cart">
                <Img
                  src={cartIcon} alt={lang.altIconCart}
                  width={20}
                  height={20}
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
