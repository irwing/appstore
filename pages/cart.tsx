import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Img from 'next/image'
import { Formik } from 'formik'
import { ProductsCartView } from '../components/ProductsCartView'
import { numberToMoney } from '../utils/formats'

const payIcon = require('../public/money-bill-1.svg')

const CartDetail = () => {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const total = cart.reduce((acc, product) => acc + product.cantidad * product.precio, 0)
    setTotal(total)
  }, [])

  return (
    <div>
      <h3>Carrito de compras</h3>
      <p>Ingrese sus datos para completar el pedido.</p>
      <Formik initialValues={{ name: '', phone: '', email: '' }}
        validate={values => {
          const errors = {}
          if (values.name.length < 2) {
            errors.name = 'Debe tener al menos 2 caracteres'
          }
          if (values.phone.length < 8) {
            errors.phone = 'Debe tener al menos 8 caracteres'
          }
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Es obligatorio y debe ser válido'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          alert('El pago se realizó correctamente')
          localStorage.setItem('cart', JSON.stringify([]))
          window.location.href = '/'
          setSubmitting(false)
        }}
      >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting
       }) => (
         <form className="form-cart form-inline" onSubmit={handleSubmit}>
           <div className="form-inline" style={{ flex: 1 }}>
            <div className="form-group" style={{ width: 250 }}>
              <label htmlFor="name">{'Nombre'}</label>
              <input
                id="name"
                className="form-control"
                placeholder={'Nombre'}
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <span>{errors.name && touched.name && errors.name}</span>
            </div>
            <div className="form-group" style={{ width: 200 }}>
              <label htmlFor="phone">{'Teléfono'}</label>
              <input
                id="phone"
                className="form-control"
                placeholder={'Teléfono'}
                type="text"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
              <span>{errors.phone && touched.phone && errors.phone}</span>
            </div>
            <div className="form-group" style={{ flex: 1, width: '100%' }}>
              <label htmlFor="email">{'Email'}</label>
              <input
                id="email"
                className="form-control"
                placeholder={'Email'}
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <span>{errors.email && touched.email && errors.email}</span>
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
            <button type="submit" disabled={isSubmitting} className="form-cart-pay">
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
       )}
     </Formik>
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
