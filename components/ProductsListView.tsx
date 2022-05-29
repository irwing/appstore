import React, { useState, useEffect } from 'react'
import { ProductCard } from './ProductCard'
import Filters from '../components/Filters'
import { on } from 'events'
import handler from '../pages/api/products/find'
// TODO: *** ADD types

const ButtonLoadMore = (props) => {
  const { onClick } = props

  return (
    <div className="products-list-loadmore">
      <button onClick={onClick}>
        {/* REFACTOR add text to language file */}
        {'Ver más'}
      </button>
    </div>
  )
}

export const ProductsListView = (props) => {
  const { filter, loadMore } = props

  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [order, setOrder] = useState('nombre-asc')

  // handler filter
  const handleFilter = () => {
    setPage(page + 1)
  }

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
      {filter && <Filters setOrder={setOrder} />}
      <div className="products-list">
        {products.map(product => (
            <ProductCard key={product.id_empresa} product={product} />
        ))}
        {loadMore && <ButtonLoadMore onClick={handleFilter} />}
      </div>
    </>
  )
}
module.exports = { ProductsListView }
