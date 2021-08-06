import classes from './TripleColumnItems.module.scss'
import CategoryItem from './CategoryItem'
import { categoryName } from '../../data'

function TripleColumnItems () {
  return (
        <section className={classes.tripleColumns}>
          {categoryName.map(category => (
            <CategoryItem key={category.id} category={category.name}/>
          ))}
        </section>
  )
}

export default TripleColumnItems
