import { useState } from 'react'
import classes from './QuantityButton.module.scss'

function QuantityButton () {
  const [quantitiy, setQuantity] = useState(0)

  function handlePlus () {
    setQuantity(quantitiy + 1)
  }

  function handleMinus () {
    if (quantitiy === 0) {
      setQuantity(0)
    } else {
      setQuantity(quantitiy - 1)
    }
  }

  return (
      <div className={classes.QuantityButton}>
          <button onClick={handleMinus}>-</button>
          <p>{quantitiy}</p>
          <button onClick={handlePlus}>+</button>
      </div>
  )
}

export default QuantityButton
