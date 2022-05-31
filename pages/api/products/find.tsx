import ensureConnection from '../../../database'
import { Product } from '../../../database/entities/Product'
import TypeProduct from '../../../typings/TypeProduct'

ensureConnection()

export default async function handler (req, res) {
  const ids:[number] = req.body.ids || []

  // @ts-ignore
  if (ids.length === 0) {
    return res.status(400).json({
      status: 'error',
      message: 'ids must be an array with at least one element'
    })
  }

  try {
    const products:TypeProduct[] = await Product.findByIds(ids)
    return res.status(200).json(products)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
