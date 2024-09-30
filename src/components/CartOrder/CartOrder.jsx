import React from 'react'
import { useDispatch } from 'react-redux'
import xIcon from "../../assets/images/xIcon.png"
import { decrementQuantityAC, deleteOrderAC, incrementQuantityAC } from '../../redux/productReducer'
import styles from "./CartOrder.module.css"

const CartOrder = ({prod}) => {
  const dispatch = useDispatch()

  const decrementCnt = () => {
    if (prod.quantity == 1) {
      dispatch(deleteOrderAC(prod.id))
    } else {
      dispatch(decrementQuantityAC(prod.id))
    }
  }
  const incrementCnt = () => {
    dispatch(incrementQuantityAC(prod.id))
  }
  const deleteOrder = () => {
    dispatch(deleteOrderAC(prod.id))
  }
  
  return (
    <div className={styles.prod}>
        <img src={prod.image} alt="" className={styles.prod__image} />
        <div className={styles.prod__info}>
          <p className={styles.prod__title}>{ prod.title.slice(0, 20) + "..." }</p>
          <p className={styles.prod__description}>{ prod.description.slice(0, 50) + "..." }</p>
        </div>
        <p className={styles.total__price}>{"$"+prod.price*prod.quantity}</p>
        <button onClick={decrementCnt} className={styles.counter__btn}>-</button>
        <p  className={styles.counter__txt}>{ prod.quantity }</p>
        <button onClick={incrementCnt} className={styles.counter__btn}>+</button>
        <img onClick={deleteOrder} src={xIcon} alt="" className={styles.delete__prod} />
    </div>
  )
}

export default CartOrder