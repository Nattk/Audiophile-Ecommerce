import React from 'react'
import classes from './DoubleColumnProduct.module.scss'

function DoubleColumnProduct (props) {
  const inversion = props.inversion
  return (
        <section className={classes.DoubleColumn} >
            {props.children}
        </section>
  )
}

export default DoubleColumnProduct
