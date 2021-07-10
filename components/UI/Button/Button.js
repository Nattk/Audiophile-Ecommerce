import classes from './Button.module.scss'

function Button (props) {
  const type = props.type

  return (
     <div className={`${classes.btn} ${type === 'standard' ? classes.standardBtn : classes.arrowBtn}`} >
         {props.children} {type === 'arrow' && <span> &gt; </span>}
     </div>
  )
}
export default Button
