import classes from './TripleColumnItems.module.scss'
import CategoryItem from './CategoryItem'
import { categoryName } from '../../data'
import { useRouter } from 'next/router'

function TripleColumnItems () {
  const router = useRouter()

  const handleChangePage = (category) => {
    router.push({
      pathname: '/' + category
    })
  }

  return (
        <section className={classes.tripleColumns}>
          {categoryName.map(category => (
            <CategoryItem key={category.id} category={category.name} action={() => handleChangePage(category)}/>
          ))}
        </section>
  )
}

export default TripleColumnItems
