import { numberToMoney } from '../utils/formats'

export const ProductCard = ({ product }) => {
  return (
    <div className="product">
      <div className="product-image">
        <img src={product.banner} />
      </div>
      <div className="product-info">
        <h3 className="product-info-name">{product.nombre}</h3>
        <p className="product-info-category">{product.tipo_servicio}</p>
        <p className="product-info-calification">{product.calificacion} vendidos</p>
        <div className="product-info-footer">
          <p className="product-info-price">{numberToMoney(product.precio)}</p>
          <button className="product-info-addtocart">
            Agregar al carro
          </button>
        </div>
      </div>
    </div>
  )
}
