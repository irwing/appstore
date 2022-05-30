import { numberToMoney, firstLetterUppercase } from '../utils/formats'

export const ProductCardCart = (props) => {
  const { product } = props

  const handleRemoveToCart = (id:number) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    if (cart.length > 0) {
      const productExistsIndex = cart.findIndex(product => product.id_empresa === id)
      cart.splice(productExistsIndex, 1)
      localStorage.setItem('cart', JSON.stringify(cart))

      // remove product in DOM
      const productElement = document.getElementById(`product-${id}`)
      productElement.remove()

      // update class header-cart
      const headerCart = document.getElementById('header-cart-count')
      headerCart.innerHTML = cart.length.toString()
    }
  }

  return (
    <div className="product" id={`product-${product.id_empresa}`}>
      <div className="product-image">
        <img src={product.banner} />
      </div>
      <div className="product-info">
        <h3 className="product-info-name">{firstLetterUppercase(product.nombre)}</h3>
        <p className="product-info-category">{product.tipo_servicio}</p>
        <p className="product-info-calification">{product.calificacion} vendidos</p>
        <div className="product-info-footer">
          <p className="product-info-price">{numberToMoney(product.precio)}</p>
          <button className="product-info-removetocart" onClick={() => handleRemoveToCart(product.id_empresa)}>
            Quitar
          </button>
        </div>
      </div>
    </div>
  )
}
