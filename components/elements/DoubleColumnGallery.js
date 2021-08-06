import Image from 'next/image'
import classes from './DoubleColumnGallery.module.scss'

function DoubleColumnGallery (props) {
  const product = props.product
  return (
        <section className={classes.Gallery}>
            <div className={classes.firstCol}>
                <div className={classes.imgContainer}><Image src={product.gallery.first.desktop} alt={product.name} layout="fill"/></div>
                <div className={classes.imgContainer}><Image src={product.gallery.second.desktop} alt={product.name} layout="fill"/></div>
            </div>
            <div className={classes.secondCol}>
                <div className={classes.imgContainer}><Image src={product.gallery.third.desktop} alt={product.name} layout="fill"/></div>
            </div>
        </section>
  )
}

export default DoubleColumnGallery
