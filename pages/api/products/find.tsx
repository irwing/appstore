import ensureConnection from '../../../database'
import { Product } from '../../../database/entities/Product'

ensureConnection()

interface ProductTs {
  id_empresa: number,
  nombre: string,
  tipo_servicio: string,
  precio: number,
  calificacion: number,
  banner: string
}

export default async function handler (req, res) {
  const { ids } = req.body

  if (!Array.isArray(ids) || ids.length === 0) {
    res.status(400).json({
      status: 'error',
      message: 'ids must be an array with at least one element'
    })
    return
  }

  try {
    const productsInCart:ProductTs[] = await Product.findByIds(ids)
    res.status(200).json(productsInCart)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
