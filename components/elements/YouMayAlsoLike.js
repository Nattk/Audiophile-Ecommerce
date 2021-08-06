import classes from './YouMayAlsoLike.module.scss'
import Image from 'next/image'
import Button from '../UI/Button/Button'
import { productsData } from '../../data'

function YouMayAlsoLike (props) {
  const product = props.product
  console.log(product)

  const categoryFinder = (suggestionSlug) => {
    const suggestion = productsData.filter(products => products.slug === suggestionSlug)
    return suggestion[0].category
  }

  return (
        <section className={classes.tripleColumn}>
        <h3>You May Also Like</h3>
        {product.others.map((suggestion, i) => (
            <div key={i} className={classes.col}>
                <div className={classes.imgContainer}>
                  <Image src={suggestion.image.desktop} alt={suggestion.name} layout="fill"/>
                </div>
                <p>{suggestion.name}</p>
                <Button type='standard' path={`/${categoryFinder(suggestion.slug)}/${suggestion.slug}`}>See Product</Button>
            </div>
        ))}
    </section>
  )
}

export default YouMayAlsoLike
