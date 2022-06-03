import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'





function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>

      <Component {...pageProps} />
      <Footer />

    </>
  )
}

export default MyApp
