import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  const productList = [1, 2, 3 ,4 ,5, 6, 7, 8, 9, 10]
  const productHTML = productList.map((item: number, index) => {
    return (
      <div className='product-item' key={index}>
        <div className='image-wrapper'>
          <img className='product-image' src="/example.jpg" alt="Img" />
          <div className="like-btn"><img src="/heart.svg" alt="heart" className='like-btn-svg'></img></div>
        </div>
        <div className='text-wrapper'>
          <span className='product-name'>SYNTHETIC PINK SWEATER</span>
          <span className='product-brand'>ZARA | WOMEN</span>
          <span className='product-price'>£30</span>
        </div>
      </div>
    )
  })

  return (
    <div className="home-wrapper">

      <nav className="nav-bar">
        <button className='back-btn'><img src="/left-arrow.svg" alt="" /></button>
        <span className='hoodify-logo'>Hoodify</span>
        <button className='search-btn'><img src="/search.svg" alt="" /></button>
      </nav>

      <section className='list-wrapper'>
        
        <header className='list-header'>
          <span>BEST <br/> SELLERS</span>
          <img className='signature' src="signature.svg" alt="signature" />
        </header>
        
        <main className='product-list'>
          {productHTML}
        </main>
      </section>
    </div>
  )
}

export default Home
