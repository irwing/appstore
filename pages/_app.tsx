import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/Footer'
import { CartProvider } from '../contexts/CartContext.js'

import lang from '../lang'
import '../styles/globals.css'

function App ({ Component, pageProps }) {
  return (
    <CartProvider>
      <Head>
        <title>{lang.appTitle}</title>
        <meta name="description" content={lang.appDescription} />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="wrapper">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App
