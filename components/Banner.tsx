import Img from 'next/image'

const banner1 = require('../public/banner1.png')
const banner2 = require('../public/banner2.jpeg')

const Banner = () => {
  return (
    <div className="banner">
      <a target="__blank" href="https://github.com/irwing/appstore">
        <Img src={banner1} alt="Promoción Cine" />
      </a>
      <a target="__blank" href="https://github.com/irwing/appstore">
        <Img src={banner2} alt="Promoción Zoologico" />
      </a>
    </div>
  )
}

export default Banner
