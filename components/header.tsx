import Link from 'next/link'
import Img from 'next/image'

const logo = require('../public/icon.png')
const cartIcon = require('../public/cart-shopping.svg')

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <Link href="/">
            <span className='link'>
              <Img
                src={logo} alt="Cuponatric logo"
                layout='responsive'
              />
            </span>
          </Link>
        </div>
        <Link href="/cart">
          <span className='link'>
            <div className="header-cart">
                <Img
                  src={cartIcon} alt="Cart icon"
                  width={24}
                  height={24}
                />
                <span className="count">3</span>
            </div>
          </span>
        </Link>
      </div>
    </header>
  )
}

export default Header
