import classes from './YouMayAlsoLike.module.scss'
import Image from 'next/image'
import Button from '../UI/Button/Button'
import { useRouter } from 'next/router'
import { productsData } from '../../data'

function YouMayAlsoLike (props) {
  const product = props.product
  const router = useRouter()

  const categoryFinder = (suggestionSlug) => {
    const suggestion = productsData.filter(products => products.slug === suggestionSlug)
    return suggestion[0].category
  }

  const handleChangePage = (suggestion) => {
    router.push({
      pathname: `/${categoryFinder(suggestion.slug)}/${suggestion.slug}`
    })
  }

  return (
        <section className={classes.tripleColumn}>
        <h3>You May Also Like</h3>
        {product.others.map((suggestion, i) => (
            <div key={i} className={classes.col}>
                <picture>
                  <source media="screen and (min-device-width : 480px) and (max-device-width : 768px)" srcSet={suggestion.image.tablet}/>
                  <source media="screen and (min-device-width : 320px) and (max-device-width : 480px)" srcSet={suggestion.image.mobile}/>
                  <img src={suggestion.image.desktop} alt={suggestion.name} className={classes.imgContainer}/>
                </picture>
                  {/* <Image src={suggestion.image.desktop} alt={suggestion.name} layout="fill"/> */}
                <p>{suggestion.name}</p>
                <Button type='standard' clicked={() => handleChangePage(suggestion)} path={`/${categoryFinder(suggestion.slug)}/${suggestion.slug}`}>See Product</Button>
            </div>
        ))}
    </section>
  )
}

export default YouMayAlsoLike
