import { numberToMoney, firstLetterUppercase } from '../utils/formats'

export const ProductCard = (props) => {
  const { product } = props

  const handleAddToCart = (id:number) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []

    const productExistsIndex = cart.findIndex(product => product.id_empresa === id)

    if (cart.length === 0) {
      cart.push({ id_empresa: id, cantidad: 1 })
      localStorage.setItem('cart', JSON.stringify(cart))
    } else {
      if (productExistsIndex !== -1) {
        cart[productExistsIndex].cantidad++
      } else {
        cart.push({ id_empresa: id, cantidad: 1 })
      }

      localStorage.setItem('cart', JSON.stringify(cart))
    }

    // update class header-cart
    const headerCart = document.getElementById('header-cart-count')
    headerCart.innerHTML = cart.length.toString()
  }

  return (
    <div className="product">
      <div className="product-image">
        <img src={product.banner} />
      </div>
      <div className="product-info">
        <h3 className="product-info-name">{firstLetterUppercase(product.nombre)}</h3>
        <p className="product-info-category">{product.tipo_servicio}</p>
        <p className="product-info-calification">{product.calificacion} vendidos</p>
        <div className="product-info-footer">
          <p className="product-info-price">{numberToMoney(product.precio)}</p>
          <button className="product-info-addtocart" onClick={() => handleAddToCart(product.id_empresa)}>
            Agregar al carro
          </button>
        </div>
      </div>
    </div>
  )
}
