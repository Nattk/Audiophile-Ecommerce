import classes from './YouMayAlsoLike.module.scss'
import Img1 from '../../public/assets/shared/desktop/image-xx59-headphones.jpg'
import Image from 'next/image'
import Button from '../UI/Button/Button'

function YouMayAlsoLike () {
  return (
        <section className={classes.tripleColumn}>
        <h3>You May Also Like</h3>
        <div className={`${classes.col} ${classes.firstCol}`}>
            <Image src={Img1} alt='hadephones'/>
            <p>xx59</p>
            <Button type='standard'>See Product</Button>
        </div>
        <div className={`${classes.col} ${classes.secondCol}`}>
            <Image src={Img1} alt='hadephones'/>
            <p>xx59</p>
            <Button type='standard'>See Product</Button>
        </div>
        <div className={`${classes.col} ${classes.lastCol}`}>
            <Image src={Img1} alt='hadephones'/>
            <p>xx59</p>
            <Button type='standard'>See Product</Button>
        </div>
    </section>
  )
}

export default YouMayAlsoLike
