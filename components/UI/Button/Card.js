import classes from './Card.module.scss'

function Card (props) {
  return (
        <section className={classes.card}>
          <button className={classes.closeButton} onClick={props.modalClosed}>x</button>
            {props.children}
        </section>
  )
}

export default Card
