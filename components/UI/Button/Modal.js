import classes from './Modal.module.scss'

function Modal (props) {
  const visible = props.visible
  return (
        <div className={classes.modal} style={{ display: visible ? 'block' : 'none' }}>
            {props.children}
        </div>
  )
}

export default Modal
