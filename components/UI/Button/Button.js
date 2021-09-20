import classes from './Button.module.scss'
import { Fragment } from 'react'

function Button (props) {
  const type = props.type
  let btn

  switch (type) {
    case 'standard':
      btn = (<div data-testid="buttonStandard" className={`${classes.btn} ${classes.standardBtn}`} onClick={props.clicked} style={{ width: props.fullWidth ? '100%' : '' }}>
        {props.children}
    </div>)
      break
    case 'arrow':
      btn = (<div data-testid="arrowButton" className={`${classes.btn} ${classes.arrowBtn}`} onClick={props.clicked} >
        {props.children} <span> &gt; </span>
      </div>)
      break
    case 'black':
      btn = (<div data-testid="blackButton" className={`${classes.btn} ${classes.blackBtn}`} onClick={props.clicked}>
      {props.children}
    </div>)
      break
    default:
      btn = (<div data-testid="button" className={`${classes.btn} ${classes.standardBtn}`} onClick={props.clicked} style={{ width: props.fullWidth ? '100%' : '' }}>
      {props.children}
      </div>)
      break
  }

  return (
    <Fragment>
      {btn}
    </Fragment>
  )
}
export default Button
