import React from 'react'
import Image from 'next/image'
import Button from '../UI/Button/Button'
import classes from './DoubleColumnProduct.module.scss'

function DoubleColumnProduct (props) {
  const inversion = props.inversion
  const product = props.product
  console.log({ justifyItems: inversion ? 'start' : 'center' })

  return (
        <section className={`${classes.DoubleColumn} ${inversion ? classes.reversed : ''}`} style={{ justifyItems: inversion ? 'start' : 'center' }}>
          <div className={classes.imgContainer}>
            <Image src={product.image.desktop} alt={product.name} layout="fill" />
          </div>
          <div className={classes.productArea}>
            {product.new && <p className={classes.new}>New product</p>}
            <h2>{product.name}</h2>
            <p className={classes.description}>{product.description}</p>
            <Button type="standard">See the product</Button>
          </div>
       </section>
  )
}

export default DoubleColumnProduct
