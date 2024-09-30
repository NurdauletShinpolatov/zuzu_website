import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import styles from './Category.module.css'

const Category = ({category}) => {
  return (
    <section key={category} className={styles.category}>
      <h1 className={styles.category__title}>
        {category?.title?.slice(0,1).toUpperCase()+category.title.slice(1)}
      </h1>
      <div className={styles.products}>
        {
          category?.products?.map(prod => (
            <ProductCard product={prod} key={prod?.id}/>
          ))
        }
      </div>
    </section>
  )
}

export default Category