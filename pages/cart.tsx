import CartDetail from '../components/CartDetail'
import { ProductsCartView } from '../components/ProductsCartView'

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
