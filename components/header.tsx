import Img from 'next/image'

const logo = require('../public/icon.png')
const cartIcon = require('../public/cart-shopping.svg')

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <Img
            src={logo} alt="Cuponatric logo"
            layout='responsive'
          />
        </div>
        <a href="/cart">
          <div className="header-cart">
              <Img
                src={cartIcon} alt="Cart icon"
                width={24}
                height={24}
              />
              <span className="count">3</span>
          </div>
        </a>
      </div>
    </header>
  )
}

export default Header
