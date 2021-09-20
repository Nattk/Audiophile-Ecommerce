import classes from './QuantityButton.module.scss'
function QuantityButton (props) {
  let quantity = props.qty

  function handlePlus () {
    if (!props.id) {
      props.qtyHandler(props.qty + 1, props.id)
    } else {
      props.qtyHandler(props.id, '+')
      quantity = quantity + 1
    }
  }

  function handleMinus () {
    if (props.qty === 0) {
      props.qtyHandler(0)
    } else {
      if (!props.id) {
        props.qtyHandler(props.qty - 1, props.id)
      } else {
        props.qtyHandler(props.id, '-')
        quantity = quantity - 1
      }
    }
  }

  return (
      <div className={classes.QuantityButton} data-testid='quantityButton'>
          <button onClick={handleMinus}>-</button>
            <p>{quantity}</p>
          <button onClick={handlePlus}>+</button>
      </div>
  )
}

export default QuantityButton
