import Img from 'next/image'
import banner1 from '../public/banner1.png'
import banner2 from '../public/banner2.jpeg'
import lang from '../lang'

const Banner = () => {
  return (
    <div className="banner">
      <a target="__blank" href={'https://github.com/irwing/appstore'}>
        <Img src={banner1} alt={lang.altBanner1} />
      </a>
      <a target="__blank" href={'https://github.com/irwing/appstore'}>
        <Img src={banner2} alt={lang.altBanner2} />
      </a>
    </div>
  )
}

export default Banner
