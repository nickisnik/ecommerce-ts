import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import '../styles/product-page.scss'
function MyApp({ Component, pageProps }: AppProps) {
  return (

    <div className='app'>
      <Navbar />
      <Component {...pageProps} />
    </div>
    
  )
}

export default MyApp
