import Img from 'next/image'
import iconLoadmore from '../public/arrow-rotate-right.svg'
import lang from '../lang'

const LoadMore = (props) => {
  const { onClick } = props

  return (
    <div className="products-list-loadmore">
      <button onClick={onClick}>
        <Img src={iconLoadmore} width={14} height={14} />
        {lang.loadMore}
      </button>
    </div>
  )
}

export default LoadMore
