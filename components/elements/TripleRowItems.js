import circle from '../../public/assets/home/desktop/pattern-circles.svg'
import classes from './TripleRowItems.module.scss'

function TripleRowItems () {
  return (
        <section className={classes.tripleRow}>
          <div className={classes.row1}>
            <svg width="944" height="944" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" fill="none" fillRule="evenodd" opacity=".202"><circle cx="472" cy="472" r="235.5"/><circle cx="472" cy="472" r="270.5"/><circle cx="472" cy="472" r="471.5"/></g></svg>
          </div>
          <div className={classes.row2}>
            ZX7
          </div>
          <div className={classes.row3}>
            earphones
          </div>
          <div className={classes.row3col2}>
            earphones 2
          </div>

        </section>
  )
}

export default TripleRowItems
