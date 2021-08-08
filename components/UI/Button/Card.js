import classes from './Card.module.scss'

function Card (props) {
  console.log(props)
  return (
        <section className={classes.card} onClick={props.modalClosed}>
            {props.children}
        </section>
  )
}

export default Card
