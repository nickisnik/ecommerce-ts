import React, { useEffect, useState } from 'react'
import styles from '../styles/ShoppingCart.module.scss'
import useStore from '../utils/store'

const ShoppingCart = () => {

    const storeItems = useStore((state : any) => state.items) 
    const addItem = useStore((state: any) => state.addItem)

   

    const itemList = storeItems.map((item: {name: string, quantity: number}, index: number) => {
        return (
            <div>
                <span className={styles.item_wrapper}>{item.name}</span>
                <span>{item.quantity}</span>
            </div>
        )
    })

  return (
    <div className={styles.shopping_cart}>
        <div className={styles.item_list_wrapper}>
            {itemList}
        </div>
    </div>
  )
}

export default ShoppingCart