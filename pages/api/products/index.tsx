import ensureConnection from '../../../database'
import { Product } from '../../../database/entities/Product'

ensureConnection()

export default async function handler (req, res) {
  try {
    const products = await Product.find()
    res.status(200).json(products)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}
