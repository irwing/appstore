import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/Footer'
import lang from '../lang'
import '../styles/globals.css'

function App ({ Component, pageProps }) {
  return (
    <>
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
    </>
  )
}

export default App
