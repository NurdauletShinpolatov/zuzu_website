import React, { useEffect, useState } from 'react'
import styles from './Cart.module.css'
import trashIcon from '../../assets/images/trashIcon.png'
import { useDispatch, useSelector } from 'react-redux'
import CartOrder from '../CartOrder/CartOrder'
import { clearCartAC } from '../../redux/productReducer'
import { Link } from 'react-router-dom'
import yellowCartIcon from '../../assets/images/yellowCartIcon.png'

const Cart = () => {
    const cart = useSelector(state => state.product.cart);
    const products = useSelector(state => state.product.products);
    const dispatch = useDispatch()

    const cartProducts = cart.map(order => {
        let product = products.find(prod => prod.id == order.productID)
        product.quantity = order.quantity
        product.cntPrice = product.quantity*product.price
        return product
    })

    let totalPrice = 0;
    for (const prod of cartProducts) {
        totalPrice += prod.cntPrice
    }

    const clearCart = () => {
        dispatch(clearCartAC())
    }
    

    return (
        <section className={styles.cart__main}>
            {
                cartProducts.length > 0 ? (
                    <div className={styles.container}>
                        <div className={styles.orders__info}>
                            <div className={styles.orders__header}>
                                <h1 className={styles.section__title}>Cart</h1>
                                <div className={styles.delete__orders}>
                                    <img onClick={clearCart} src={trashIcon} alt="" />
                                    <p>Delete orders</p>
                                </div>
                            </div>
                            <div className={styles.orders__body}>
                                {
                                    cartProducts?.map(prod => (
                                        <CartOrder prod={prod}/>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={styles.price__info}>
                            <div className={styles.price__header}>
                                <h1>Your order</h1>
                            </div>
                            <div className={styles.price__calculations}>
                                {
                                    cartProducts?.map(order => (
                                        <div className={styles.order__price}>
                                            <p className={styles.flex_grow}>{order.quantity + " x " + order.title.slice(0,20)}</p>
                                            <p>{"$" + order.quantity * order.price}</p>
                                        </div>
                                    ))
                                }
                                <div className={styles.order__price}>
                                    <p className={styles.flex_grow}>Delivery</p>
                                    <p>$0</p>
                                </div>
                                <div className={styles.order__total}>
                                    <p className={styles.flex_grow}>Total</p>
                                    <p>{"$" + totalPrice.toFixed(2)}</p>
                                </div>
                            </div>
                            <button className={styles.confirm__order}>Confirm the order</button>
                        </div>
                    </div>
                ) : (
                    <div className={styles.empty__container}>
                        <div className={styles.empty__cart}>
                            <img className={styles.empty__cart_image} src={yellowCartIcon} alt="cart icon" />
                            <p className={styles.info__main}>There is no items in your cart yet</p>
                            <p className={styles.info__secondary}>Here will be dispayed what you are ordering</p>
                            <Link to="/" className={styles.home__link} >
                                Return to home page
                            </Link>
                        </div>
                    </div>
                    
                )
            }
            
        </section>
    )
}

export default Cart