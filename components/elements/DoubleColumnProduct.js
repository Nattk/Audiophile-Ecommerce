import React, { Fragment, useContext } from 'react'
import Button from '../UI/Button/Button'
import classes from './DoubleColumnProduct.module.scss'
import { CartContext } from '../../store/cart-context'
import { useRouter } from 'next/router'
import QuantityButton from '../UI/Button/QuantityButton'

function DoubleColumnProduct (props) {
  const inversion = props.inversion
  const product = props.product
  console.log(product)
  const CartCtx = useContext(CartContext)
  const router = useRouter()

  return (
        <section className={`${classes.DoubleColumn} ${router.pathname !== '/[category]/[productDetails]' ? classes.category : ''} ${inversion ? classes.reversed : ''}`} style={{ justifyItems: inversion ? 'start' : 'center' }} data-testid="DoubleColumnProduct">
          {router.pathname !== '/[category]/[productDetails]' &&
              <picture className={classes.categoryImage}>
              <source media="screen and (min-device-width:480px) and (max-device-width: 768px)" srcSet={product.imageCategory.tablet} alt={product.name}/>
              <source media="screen and (min-device-width : 320px) and (max-device-width : 480px)" srcSet={product.imageCategory.mobile} alt={product.name}/>
              <img src={product.imageCategory.desktop} alt={product.name}/>
              </picture>
          }
            {router.pathname === '/[category]/[productDetails]' &&
              <picture className={classes.productImage}>
                <source media="screen and (min-device-width:480px) and (max-device-width: 768px)" srcSet={product.image.tablet} alt={product.name}/>
                <source media="screen and (min-device-width : 320px) and (max-device-width : 480px)" srcSet={product.image.mobile} alt={product.name}/>
                <img src={product.image.desktop} alt={product.name}/>
              </picture>
            }

          <div className={classes.productArea}>
            {product.new && <p className={classes.new}>New product</p>}
            <h2>{product.name}</h2>
            <p className={classes.description}>{product.description}</p>
            { router.pathname !== '/[category]/[productDetails]' && <Button type="standard" clicked={props.action}>see the product</Button>}
            { router.pathname === '/[category]/[productDetails]' &&
            <Fragment>
              <p className="price">${product.price}</p>
              <div className={classes.addProduct}>
                <QuantityButton qty={CartCtx.qty} qtyHandler={CartCtx.setQty}/>
                <Button type="standard" clicked={() => CartCtx.handleAdd(product)}>add product</Button>
              </div>
            </Fragment>
            }
          </div>
       </section>
  )
}

export default DoubleColumnProduct
