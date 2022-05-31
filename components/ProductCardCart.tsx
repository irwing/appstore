import Img from 'next/image'
import { numberToMoney, firstLetterUppercase } from '../utils/formats'
import { TypeProduct } from '../typings/TypeProduct'
import { TypeCartList } from '../typings/TypeCart'
import trashIcon from '../public/trash-can.svg'
import lang from '../lang'

type TypeProps = { product: TypeProduct }

const ProductCardCart = (props:TypeProps) => {
  const { product } = props
  const {
    id_empresa: id,
    nombre,
    tipo_servicio: tipoServicio,
    precio,
    banner,
    cantidad
  } = product

  const handleRemoveToCart = (id:number) => {
    const cart:TypeCartList = JSON.parse(localStorage.getItem('cart')) || []
    if (cart.length > 0) {
      const productExistsIndex = cart.findIndex(product => product.id_empresa === id)
      cart.splice(productExistsIndex, 1)
      localStorage.setItem('cart', JSON.stringify(cart))
      const productElement = document.getElementById(`product-${id}`)
      productElement.remove()
    }

    const headerCart = document.getElementById('header-cart-count')
    headerCart.innerHTML = cart.length.toString()
  }

  return (
    <div className="product" id={`product-${id}`}>
      <div className="product-image" style={{ backgroundImage: `url("${banner}")` }}></div>
      <div className="product-info">
        <h3 className="product-info-name">{firstLetterUppercase(nombre)}</h3>
        <p className="product-info-category">{tipoServicio}</p>
        <p className="product-info-cantidad">{cantidad} X {numberToMoney(precio)}</p>
        <div className="product-info-footer">
          <p className="product-info-price">{numberToMoney(cantidad * precio)}</p>
          <button className="product-info-removetocart" onClick={() => handleRemoveToCart(id)}>
            <Img
              src={trashIcon} alt={lang.altIconTrash}
              width={14}
              height={14}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCardCart
