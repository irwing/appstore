import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'

function App ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AppStore</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App
