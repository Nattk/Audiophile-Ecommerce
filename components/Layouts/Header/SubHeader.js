import Button from '../../UI/Button/Button'
import { useRouter } from 'next/router'
import classes from './Header.module.scss'

function SubHeader () {
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
                          {router.pathname}
                        </section>)
  }
  return subHeaderContent
}
export default SubHeader
