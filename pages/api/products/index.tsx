import { getRepository } from 'typeorm'
import ensureConnection from '../../../database'
import { Product } from '../../../database/entities/Product'
import TypeProduct from '../../../typings/TypeProduct'

ensureConnection()

export default async function handler (req, res) {
  const page:number = req.query.page || 1
  const limit:number = req.query.limit || 12
  const order = req.query.order?.split('-') || 'nombre-asc'

  try {
    const products:TypeProduct[] = await getRepository(Product)
      .createQueryBuilder('product')
      // @ts-ignore
      .orderBy(`product.${order[0]}`, order[1].toUpperCase())
      .skip(limit * (page - 1))
      .take(limit)
      .getMany()

    return res.status(200).json(products)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
