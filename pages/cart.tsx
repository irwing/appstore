import Link from 'next/link'
import { ProductsCartView } from '../components/ProductsCartView'

const CartDetail = () => {
  const handlePayment = (e) => {
    e.preventDefault()
    alert('Pago')
  }

  return (
    <div>
      <h3>Carrito de compras</h3>
      <p>Ingrese sus datos para completar el pedido.</p>
      <form className="form-cart">
        <div className="form-group">
          <label htmlFor="name">{'Nombre'}</label>
          <input type="text" className="form-control" id="name" placeholder={'Nombre'} />
        </div>
        <div className="form-group">
          <label htmlFor="mail">{'Email'}</label>
          <input type="text" className="form-control" id="mail" placeholder={'Email'} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">{'Teléfono'}</label>
          <input type="text" className="form-control" id="phone" placeholder="{'Teléfono'}" />
        </div>
        <div className="form-group-infopay">
          <p>Total a pagar</p>
          <h3>{'$90.000'}</h3>
          <button className="form-cart-pay" onClick={handlePayment}>Pagar</button>
          <Link href="/">
            {'Volver a la tienda'}
          </Link>
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
        <ProductsCartView />
      </main>
    </div>
  )
}
