import { ProductCard } from './ProductCard'

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
