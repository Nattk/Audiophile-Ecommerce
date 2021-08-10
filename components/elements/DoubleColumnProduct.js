import React, { Fragment } from 'react'
import Image from 'next/image'
import Button from '../UI/Button/Button'
import classes from './DoubleColumnProduct.module.scss'
import { useRouter } from 'next/router'
import QuantityButton from '../UI/Button/QuantityButton'

function DoubleColumnProduct (props) {
  const inversion = props.inversion
  const product = props.product
  const router = useRouter()

  return (
        <section className={`${classes.DoubleColumn} ${inversion ? classes.reversed : ''}`} style={{ justifyItems: inversion ? 'start' : 'center' }}>
          <div className={classes.imgContainer}>
            <Image src={product.image.desktop} alt={product.name} layout="fill" />
          </div>
          <div className={classes.productArea}>
            {product.new && <p className={classes.new}>New product</p>}
            <h2>{product.name}</h2>
            <p className={classes.description}>{product.description}</p>
            { router.pathname !== '/[category]/[productDetails]' && <Button type="standard" clicked={props.action}>see the product</Button>}
            { router.pathname === '/[category]/[productDetails]' &&
            <Fragment>
              <p className="price">${product.price}</p>
              <div className={classes.addProduct}>
                <QuantityButton qty={props.qty} qtyHandler={props.qtySet}/>
                <Button type="standard" clicked={props.action}>add product</Button>
              </div>
            </Fragment>
            }
          </div>
       </section>
  )
}

export default DoubleColumnProduct
