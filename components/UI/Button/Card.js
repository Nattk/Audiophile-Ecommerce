import classes from './Card.module.scss'

function Card (props) {
  return (
        <section className={classes.card}>
            {props.children}
        </section>
  )
}

export default Card
