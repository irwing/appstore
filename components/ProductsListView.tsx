import React, { useState, useEffect } from 'react'
import Empty from './Empty'
import Filters from '../components/Filters'
import ProductCard from './ProductCard'
import LoadMore from './LoadMore'
import { TypeProductList } from '../typings/TypeProduct'

export const ProductsListView = () => {
  const [products, setProducts] = useState<TypeProductList>([])
  const [page, setPage] = useState<number>(1)
  const [order, setOrder] = useState<string>('nombre-asc')

  const handleLoadMore = () => {
    setPage(page + 1)
  }

  useEffect(() => {
    const url:string = `${process.env.NEXT_PUBLIC_API}/products?order=${order}&page=${page}`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        (page === 1)
          ? setProducts(data)
          : setProducts([...products, ...data])
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, order])

  return (products.length === 0)
    ? (<Empty />)
    : (
        <>
          <Filters order={order} setOrder={setOrder} />
          <div className="products-list">
            {products.map(product => <ProductCard key={product.id_empresa} product={product} />)}
            <LoadMore onClick={handleLoadMore} />
          </div>
        </>
      )
}
module.exports = { ProductsListView }
