import { Fragment } from 'react'
import classes from './Button.module.scss'

function Button (props) {
  const type = props.type

  let btn
  switch (type) {
    case 'standard':
      btn = (<div className={`${classes.btn} ${classes.standardBtn}`} >
        {props.children}
    </div>)
      break
    case 'arrow':
      btn = (<div className={`${classes.btn} ${classes.arrowBtn}`} >
        {props.children} <span> &gt; </span>
      </div>)
      break
    case 'black':
      btn = (<div className={`${classes.btn} ${classes.blackBtn}`} >
      {props.children}
    </div>)
      break
    default:
      break
  }

  return (
    <Fragment>
      {btn}
    </Fragment>
  )
}
export default Button
