import classes from './QuantityButton.module.scss'

function QuantityButton (props) {
  function handlePlus () {
    console.log(props.qty)
    props.qtyHandler(props.qty + 1, props.id)
  }

  function handleMinus () {
    if (props.qty === 0) {
      props.qtyHandler(0)
    } else {
      props.qtyHandler(props.qty - 1, props.id)
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
