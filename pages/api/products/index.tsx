import ensureConnection from '../../../database'
import { Product } from '../../../database/entities/Product'
import { getRepository } from 'typeorm'

ensureConnection()

export default async function handler (req, res) {
  const page = req.query.page || 1
  const limit = req.query.limit || 10
  const order = req.query.order?.split('-') || 'nombre-asc'

  try {
    const products = await getRepository(Product)
      .createQueryBuilder('product')
      .orderBy(`product.${order[0]}`, order[1].toUpperCase())
      .skip(limit * (page - 1))
      .take(limit)
      .getMany()

    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
