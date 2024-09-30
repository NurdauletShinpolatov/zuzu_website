import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantityAC, deleteOrderAC, incrementQuantityAC, setSelectedProductAC } from '../../redux/productReducer';
import styles from './ProductCard.module.css'

const ProductCard = ({product:prod}) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.product.cart)
  const [cnt, setCnt] = useState(0);
  
  useEffect(() => {
    cart.map(order => {
      if (order.productID == prod.id) {
        setCnt(order.quantity)
      }
    })
  }, [cart])

  const decrementCnt = () => {
    if (cnt == 1) {
      dispatch(deleteOrderAC(prod.id))
      setCnt(0)
    } else {
      dispatch(decrementQuantityAC(prod.id))
    }
   }

  const incrementCnt = () => { 
    dispatch(incrementQuantityAC(prod.id))
   }

  const selectProduct = () => {
    dispatch(setSelectedProductAC(prod.id))
  }

  return (
    <div key={prod.id} className={styles.product__card}>
        <div className={styles.product__image__container}>
          <img className={styles.product__image} src={prod.image} alt="product image" />
        </div>
        <div className={styles.product__title}>
            {prod.title.slice(0, 15)+"..."}
        </div>
        <div className={styles.product__description}>
            {prod.description.slice(0, 60)+"..."}
        </div>
        <div className={styles.product__action}>
            <span className={styles.product__price}>{"$"+prod.price}</span>
            {
              cnt == 0 ? (
                <button onClick={selectProduct} className={styles.product__btn}>Select</button>
              ) : (
                <div className={styles.counter}>
                  <button onClick={decrementCnt} className={styles.counter__btn}>-</button>
                  <p  className={styles.counter__txt}>{ cnt }</p>
                  <button onClick={incrementCnt} className={styles.counter__btn}>+</button>
                </div>
              )
            }
        </div>
    </div>
  )
}

export default ProductCard