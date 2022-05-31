import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/Footer'
import '../styles/globals.css'

function App ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{'AppStore 🚀 Next.js'}</title>
        <meta name="description" content={'App store for testing Next.js'} />
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
