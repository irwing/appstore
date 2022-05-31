import Img from 'next/image'
import { numberToMoney, firstLetterUppercase } from '../utils/formats'
import { TypeProduct } from '../typings/TypeProduct'
import { TypeCartList } from '../typings/TypeCart'
import cartIcon from '../public/cart-shopping.svg'
import lang from '../lang'

type TypeProps = { product: TypeProduct }

const ProductCard = (props:TypeProps) => {
  const { product } = props
  const {
    id_empresa: id,
    nombre,
    tipo_servicio: tipoServicio,
    calificacion,
    precio,
    banner
  } = product

  const handleAddToCart = (id:number) => {
    const cart:TypeCartList = JSON.parse(localStorage.getItem('cart')) || []

    const productIndex = cart.findIndex(product => product.id_empresa === id)

    if (productIndex !== -1) {
      cart[productIndex].cantidad++
    } else {
      cart.push({ id_empresa: id, cantidad: 1, precio: product.precio })
    }

    // TODO: *** change to global state
    localStorage.setItem('cart', JSON.stringify(cart))
    const headerCart = document.getElementById('header-cart-count')
    headerCart.innerHTML = cart.length.toString()
  }

  return (
    <div className="product">
      <div className="product-image" style={{ backgroundImage: `url("${banner}")` }}></div>
      <div className="product-info">
        <h3 className="product-info-name">{firstLetterUppercase(nombre)}</h3>
        <p className="product-info-category">{tipoServicio}</p>
        <p className="product-info-calification">{calificacion} {lang.productCardSells}</p>
        <div className="product-info-footer">
          <p className="product-info-price">{numberToMoney(precio)}</p>
          <button className="product-info-addtocart" onClick={() => handleAddToCart(id)}>
            {lang.productCardAddToCard}
            <Img
              src={cartIcon} alt={'Cart icon'}
              style={{ marginLeft: 2 }}
              width={24}
              height={14}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
