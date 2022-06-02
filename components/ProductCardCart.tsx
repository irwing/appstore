import React, { useContext } from 'react'
import Img from 'next/image'
import { numberToMoney, firstLetterUppercase } from '../utils/formats'
import { TypeProduct } from '../typings/TypeProduct'
import { TypeCartList } from '../typings/TypeCart'
import trashIcon from '../public/trash-can.svg'
import lang from '../lang'
import { CartContext } from '../Contexts/CartContext.js'

type TypeProps = { product: TypeProduct }

const ProductCardCart = (props:TypeProps) => {
  const cartContext = useContext(CartContext)
  const { cart, setCart } = cartContext
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
    const cartStorage:TypeCartList = JSON.parse(localStorage.getItem('cart')) || []

    if (cartStorage.length > 0) {
      const productExistsIndex = cartStorage.findIndex(product => product.id_empresa === id)
      if (productExistsIndex !== -1) {
        const precio = cartStorage[productExistsIndex].precio
        const cantidadRemove = cartStorage[productExistsIndex].cantidad
        const totalRemove = precio * cantidadRemove

        cartStorage.splice(productExistsIndex, 1)
        localStorage.setItem('cart', JSON.stringify(cartStorage))
        document.getElementById(`product-${id}`).remove()

        setCart({
          total: cart.total - totalRemove,
          count: cart.count - cantidadRemove
        })
      }
    }
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
