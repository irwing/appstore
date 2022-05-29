
import { ProductsListView } from '../components/ProductsListView'
import Banner from '../components/Banner'

export default function Home () {
  return (
    <div>
      <main>
        <Banner />
        <ProductsListView
          filter={true}
          loadMore={true}
        />
      </main>
    </div>
  )
}
