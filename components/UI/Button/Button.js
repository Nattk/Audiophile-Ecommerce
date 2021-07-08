import classes from './Button.module.scss'

function Button (props) {
  return (
     <div className={classes.standardBtn}>
         {props.children}
     </div>
  )
}
export default Button
