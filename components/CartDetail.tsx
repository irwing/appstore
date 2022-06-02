import React, { useContext } from 'react'
import Link from 'next/link'
import Img from 'next/image'
import { Formik } from 'formik'
import { numberToMoney } from '../utils/formats'
import payIcon from '../public/money-bill-1.svg'
import lang from '../lang'
import { CartContext } from '../contexts/CartContext.js'

const CartDetail = () => {
  const { cart } = useContext(CartContext)
  const { total } = cart

  return (
    <div>
      <h3>{lang.cartTitle}</h3>
      <p>{lang.cartSubTitle}</p>
      <Formik initialValues={{ name: '', phone: '', email: '' }}
        validate={values => {
          const errors = {}
          if (values.name.length < 2) {
            // @ts-ignore
            errors.name = lang.cartValidationName
          }
          if (values.phone.length < 8) {
            // @ts-ignore
            errors.phone = lang.cartValidationPhone
          }
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            // @ts-ignore
            errors.email = lang.cartValidationEmail
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          alert(lang.cartPaySuccess)
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
                <label htmlFor="name">{lang.cartPlaceholderName}</label>
                <input
                  id="name"
                  className="form-control"
                  placeholder={lang.cartPlaceholderName}
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <span>{errors.name && touched.name && errors.name}</span>
              </div>
              <div className="form-group" style={{ width: 200 }}>
                <label htmlFor="phone">{lang.cartPlaceholderPhone}</label>
                <input
                  id="phone"
                  className="form-control"
                  placeholder={lang.cartPlaceholderPhone}
                  type="text"
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                />
                <span>{errors.phone && touched.phone && errors.phone}</span>
              </div>
              <div className="form-group" style={{ flex: 1, width: '100%' }}>
                <label htmlFor="email">{lang.cartPlaceholderEmail}</label>
                <input
                  id="email"
                  className="form-control"
                  placeholder={lang.cartPlaceholderEmail}
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
                  {lang.cartBackToShop}
                </Link>
              </div>
            </div>
            <div className="form-group-infopay">
              <p style={{ fontSize: '14pt' }}>{lang.cartFromTotalPay}</p>
              <h3 style={{ fontSize: '22pt' }}>{numberToMoney(total)}</h3>
              <button type="submit" disabled={isSubmitting} className="form-cart-pay">
                <Img
                  src={payIcon} alt={lang.altIconPay}
                  style={{ marginBottom: '-15px', marginRight: '5px', color: '#fff' }}
                  width={30}
                  height={18}
                />
                {lang.cartPay}
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default CartDetail
