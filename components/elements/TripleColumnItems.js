import classes from './TripleColumnItems.module.scss'
import CategoryItem from './CategoryItem'

function TripleColumnItems () {
  return (
        <section className={classes.tripleColumns}>
            <CategoryItem category="Headphones"/>
            <CategoryItem category="Speakers"/>
            <CategoryItem category="Earphones"/>
        </section>
  )
}

export default TripleColumnItems
