import { useState } from 'react'
import classes from './QuantityButton.module.scss'

function QuantityButton (props) {
  const [quantity, setQuantity] = useState(0)

  function handlePlus () {
    props.qtyHandler(props.qty + 1)
  }

  function handleMinus () {
    if (props.qty === 0) {
      props.qtyHandler(0)
    } else {
      props.qtyHandler(props.qty - 1)
    }
  }

  return (
      <div className={classes.QuantityButton}>
          <button onClick={handleMinus}>-</button>
          <p>{props.qty}</p>
          <button onClick={handlePlus}>+</button>
      </div>
  )
}

export default QuantityButton
