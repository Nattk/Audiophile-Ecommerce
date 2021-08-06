import { Fragment } from 'react'
import classes from './Button.module.scss'
import { useRouter } from 'next/router'

function Button (props) {
  const type = props.type
  let btn
  const router = useRouter()

  const handleClick = () => {
    router.push({
      pathname: props.path
    })
  }

  switch (type) {
    case 'standard':
      btn = (<div className={`${classes.btn} ${classes.standardBtn}`} onClick={handleClick} >
        {props.children}
    </div>)
      break
    case 'arrow':
      btn = (<div className={`${classes.btn} ${classes.arrowBtn}`} onClick={handleClick} >
        {props.children} <span> &gt; </span>
      </div>)
      break
    case 'black':
      btn = (<div className={`${classes.btn} ${classes.blackBtn}`} onClick={handleClick}>
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
