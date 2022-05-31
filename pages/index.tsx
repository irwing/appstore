import Banner from '../components/Banner'
import { ProductsListView } from '../components/ProductsListView'

export default function Home () {
  return (
    <div>
      <main>
        <Banner />
        <ProductsListView />
      </main>
    </div>
  )
}
