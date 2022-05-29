import React, { useState, useEffect } from 'react'
import { ProductCard } from './ProductCard'
import Filters from '../components/Filters'
// TODO: *** ADD types

export const ProductsListView = () => {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [order, setOrder] = useState('nombre-asc')

  useEffect(() => {
    setPage(1)
  }, [order])

  // TODO: *** REFACTOR optimize double inital fecth
  // TODO: *** REFACTOR extract fetch to a service
  // TODO: *** REFACTOR add url to fetch from env
  useEffect(() => {
    const url = `http://localhost:3000/api/products?order=${order}&page=${page}`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        (page === 1)
          ? setProducts(data)
          : setProducts([...products, ...data])
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, order])

  return (
    <>
      <Filters order={order} setOrder={setOrder} />
      <div className="products-list">
        {products.map(product => (
            <ProductCard key={product.id_empresa} product={product} />
        ))}
        <button className="products-list-loadmore" onClick={() => setPage(page + 1)}>
          {/* REFACTOR add text to language file */}
          {'Ver más'}
        </button>
      </div>
    </>
  )
}
module.exports = { ProductsListView }
