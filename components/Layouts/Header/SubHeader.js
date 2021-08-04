import Button from '../../UI/Button/Button'
import { useRouter } from 'next/router'
import classes from './Header.module.scss'

export const getStaticProps = async (context) => {
  console.log(context)
  const category = context.params.category
  return {
    props: {
      categoryName: category
    }
  }
}

function SubHeader ({ categoryName }) {
  const router = useRouter()
  let subHeaderContent
  if (router.pathname === '/') {
    subHeaderContent = (<section className={classes.homeProductItem}>
                          <p>new product</p>
                          <p>XX99 Mark II Headphones</p>
                          <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                          <Button type="standard">See product</Button>
                          </section>)
  } else {
    subHeaderContent = (<section className={classes.categoryName}>
                          <h1>{router.query.category}</h1>
                        </section>)
  }
  return subHeaderContent
}
export default SubHeader
