export const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-card__image">
        <div className="card-product"></div>
      </div>
      <div className="product-card__info">
        <h3 className="product-card__name">{product.nombre}</h3>
        <h3 className="product-card__name">{product.tipo_servicio}</h3>
        <p className="product-card__price">{product.precio}</p>
        <p className="product-card__price">{product.calificacion}</p>
      </div>
    </div>
  )
}

export const ProductsListView = ({ products }) => (
  <div className="products-list">
    {products.map(product => (
      <ProductCard
        key={product.id_empresa}
        product={product}
      />
    ))}
  </div>
)

module.exports = { ProductsListView }
