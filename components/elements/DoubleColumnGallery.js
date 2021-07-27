import Image from 'next/image'
import classes from './DoubleColumnGallery.module.scss'
import Img1 from '../../public/assets/product-xx59-headphones/desktop/image-gallery-1.jpg'
import Img2 from '../../public/assets/product-xx59-headphones/desktop/image-gallery-2.jpg'
import Img3 from '../../public/assets/product-xx59-headphones/desktop/image-gallery-3.jpg'

function DoubleColumnGallery () {
  return (
        <section className={classes.Gallery}>
            <div className={classes.firstCol}>
                <Image src={Img1} alt="headphones" />
                <Image src={Img2} alt="headphones"/>
            </div>
            <div className={classes.secondCol}>
                <Image src={Img3} alt="headphones"/>
            </div>
        </section>
  )
}

export default DoubleColumnGallery
