import React, {useState} from 'react'
import Link from 'next/link'
import useStore from '../utils/store'
import ShoppingCart from './ShoppingCart'

const Navbar = () => {
  
  const [cartShow, setCartShow] = useState(false)

  return (
    <nav className="nav-bar">
        <Link href="/products"><button className='back-btn'><img src="/left-arrow.svg" alt="" /></button></Link>
        <Link href="/"><span className='hoodify-logo'>Hoodify</span></Link>
        <button className='search-btn' onClick={() => setCartShow((state) => !state)}>C</button>
        {cartShow ? <ShoppingCart /> : ''}
    </nav>
  )
}

export default Navbar