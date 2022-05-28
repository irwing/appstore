interface Product {
  "id_empresa": number,
  "nombre": string,
  "tipo_servicio": string,
  "precio": number,
  "calificacion": number,
  "banner": string
}

// array of products
const products: Product[] = [
  {
    "id_empresa": 12500,
    "nombre": "LA CEREZA CREATIVA",
    "tipo_servicio": "Otros servicios",
    "precio": 11244,
    "calificacion": 3,
    "banner": "https://cuponassets.cuponatic-latam.com/backendCo/uploads/banners_empresas/ae4ec5698c09cb6cc4e949214aa4b37b.600x338.png"
  },
  {
    "id_empresa": 12465,
    "nombre": "Sex Shop Jebs",
    "tipo_servicio": "Otros servicios",
    "precio": 17691,
    "calificacion": 1,
    "banner": "https://cuponassets.cuponatic-latam.com/backendCo/uploads/banners_empresas/75375376fc985871994ed6df3a224c0a.600x338.jpg"
  },
  {
    "id_empresa": 12463,
    "nombre": "Limpión Medellín ",
    "tipo_servicio": "Otros servicios",
    "precio": 12788,
    "calificacion": 8,
    "banner": "https://cuponassets.cuponatic-latam.com/backendCo/uploads/banners_empresas/7235a4d79db4a1d9ea991632e2e5ef76.600x338.jpg"
  }
]

export default function handler(req, res) {

  const { ids } = req.body

  try {
    const productsInCart = products.filter(product => ids.includes(product.id_empresa))
    res.status(200).json(productsInCart)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
