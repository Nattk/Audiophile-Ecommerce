import React from 'react'
import classes from './DoubleColumnProduct.module.scss'

function DoubleColumnProduct (props) {
  const inversion = props.inversion
  return (
        <section className={classes.DoubleColumn} style={{ justifyItems: inversion ? 'start' : 'center' }}>
            {props.children}
        </section>
  )
}

export default DoubleColumnProduct
