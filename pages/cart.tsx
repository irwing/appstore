import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Img from 'next/image'
import { ProductsCartView } from '../components/ProductsCartView'
import { numberToMoney } from '../utils/formats'

const payIcon = require('../public/money-bill-1.svg')

const CartDetail = () => {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const total = cart.reduce((acc, product) => acc + product.cantidad * product.precio, 0)
    setTotal(total)
  })

  const handlePayment = (e) => {
    e.preventDefault()
    alert('Pago')
  }

  return (
    <div>
      <h3>Carrito de compras</h3>
      <p>Ingrese sus datos para completar el pedido.</p>
      <form className="form-cart form-inline">
        <div className="form-inline" style={{ flex: 1 }}>
          <div className="form-group" style={{ width: 250 }}>
            <label htmlFor="name">{'Nombre'}</label>
            <input type="text" className="form-control" id="name" placeholder={'Nombre'} />
          </div>
          <div className="form-group" style={{ width: 200 }}>
            <label htmlFor="phone">{'Teléfono'}</label>
            <input type="text" className="form-control" id="phone" placeholder={'Teléfono'} />
          </div>
          <div className="form-group" style={{ flex: 1, width: '100%' }}>
            <label htmlFor="mail">{'Email'}</label>
            <input type="text" className="form-control" id="mail" placeholder={'Email'} />
          </div>
          <div className="form-group" style={{ width: '100%' }}>
            <Link href="/" style={{ width: '140px' }}>
              {'Volver a la tienda'}
            </Link>
          </div>
        </div>
        <div className="form-group-infopay">
          <p style={{ fontSize: '14pt' }}>Total a pagar</p>
          <h3 style={{ fontSize: '22pt' }}>{numberToMoney(total)}</h3>
          <button className="form-cart-pay" onClick={handlePayment}>
            <Img
              src={payIcon} alt="Pay icon"
              style={{ marginBottom: '-15px', marginRight: '5px', color: '#fff' }}
              width={30}
              height={18}
            />
            Pagar
          </button>
        </div>
      </form>
    </div>
  )
}

export default function Cart () {
  return (
    <div>
      <main>
        <CartDetail />
        <p>Productos de tu pedido.</p>
        <ProductsCartView />
      </main>
    </div>
  )
}
