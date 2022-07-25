import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Rating from '../../components/Rating'
import useStore from '../../utils/store'

const jsonData = require('../../components/products.json')

const Product = () => {
    const router = useRouter()
    const {id} = router.query;
    const product = jsonData.products[0];

    const items = useStore((state : any) => state.items)
    const addItem = useStore((state: any) => state.addItem)
    const handleAdd = () => {
      addItem({id: product.id, name: product.name, quantity: 1})
    }
    useEffect(() => {
      // console.log(items)
    }, [items])

    type Comment = {
      author: string,
      content: string,
      date: string  //should be date
    }

    const testComments = [{
      author: 'Claire',
      content: 'This is a great summer collection piece!',
      date: "14 Jul"
    }]

    const commentsHTML = testComments.map((comment: Comment, index: number) => {
      return (
        <div className='commment-wrapper' key={index}>
          <header className="comment-header">
            <span className='comment-author'>{comment.author}:</span>
            <span className='comment-date'>{comment.date}</span>
          </header>
          <span className='comment-text'>{comment.content}</span>
        </div>
      )
    })
    
  return (
    <div className='product-page-wrapper'>
        <div className='product-wrapper'>
          <div className='image-wrapper'>
            <img className='product-image' src="/example.jpg" alt="Img" />
            <div className="like-btn"><img src="/heart.svg" alt="heart" className='like-btn-svg'></img></div>
          </div>
          <div className='text-wrapper'>
            <Rating rating={4}/>
            <span className='product-name'>{product.name}</span>
            <span className='product-brand'>{product.subtitle}</span>
            <span className='product-price'>£{product.price}</span>
          </div>
          <button onClick={handleAdd}>Add to cart</button>
          <span>{items.length}</span> 
        </div>
        <div className='comments-wrapper'>
          <header className='comments-header'>Comments</header>
          {commentsHTML}
        </div>
    </div>
  )
}

export default Product