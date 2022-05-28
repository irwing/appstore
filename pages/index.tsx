import { ProductsListView } from '../components/products'

const products = [
  {
    id_empresa: 12500,
    nombre: 'LA CEREZA CREATIVA',
    tipo_servicio: 'Otros servicios',
    precio: 11244,
    calificacion: 3,
    banner: 'https://cuponassets.cuponatic-latam.com/backendCo/uploads/banners_empresas/ae4ec5698c09cb6cc4e949214aa4b37b.600x338.png'
  },
  {
    id_empresa: 12465,
    nombre: 'Sex Shop Jebs',
    tipo_servicio: 'Otros servicios',
    precio: 17691,
    calificacion: 1,
    banner: 'https://cuponassets.cuponatic-latam.com/backendCo/uploads/banners_empresas/75375376fc985871994ed6df3a224c0a.600x338.jpg'
  },
  {
    id_empresa: 12463,
    nombre: 'Limpión Medellín ',
    tipo_servicio: 'Otros servicios',
    precio: 12788,
    calificacion: 8,
    banner: 'https://cuponassets.cuponatic-latam.com/backendCo/uploads/banners_empresas/7235a4d79db4a1d9ea991632e2e5ef76.600x338.jpg'
  },
  {
    id_empresa: 12457,
    nombre: 'White Smile Odontología',
    tipo_servicio: 'Bienestar y salud',
    precio: 19482,
    calificacion: 7,
    banner: 'https://cuponassets.cuponatic-latam.com/backendCo/uploads/banners_empresas/a32cb59825c41c8d91f79fad328f17d1.600x338.jpg'
  },
  {
    id_empresa: 12444,
    nombre: 'akros colombia',
    tipo_servicio: 'Otros servicios',
    precio: 15287,
    calificacion: 3,
    banner: 'https://cuponassets.cuponatic-latam.com/backendCo/uploads/banners_empresas/85aaad990c64b26c47e6e1cf40952cb2.600x338.png'
  },
  {
    id_empresa: 12441,
    nombre: 'Drum Center Academia de Música',
    tipo_servicio: 'Entretención',
    precio: 16788,
    calificacion: 1,
    banner: 'https://cuponassets.cuponatic-latam.com/backendCo/uploads/banners_empresas/f26f3d1d40d6e4d8ddb374035eed1048.600x338.png'
  }
]

export default function Home () {
  return (
    <div>
      <main>
        <p>Productos...</p>
        <ProductsListView products={products} />
      </main>
    </div>
  )
}
