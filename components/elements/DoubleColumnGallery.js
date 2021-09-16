import classes from './DoubleColumnGallery.module.scss'

function DoubleColumnGallery (props) {
  const product = props.product
  return (
        <section className={classes.Gallery}>
            <div className={classes.firstCol}>
                <picture>
                    <source media="(min-width: 800px)" srcSet={product.gallery.first.tablet} alt={product.name}/>
                    <source media="(max-width: 480px)" srcSet={product.gallery.first.mobile} alt={product.name}/>
                    <img src={product.gallery.first.desktop} alt={product.name}/>
                </picture>
                <picture>
                    <source media="(min-width: 800px)" srcSet={product.gallery.second.tablet} alt={product.name}/>
                    <source media="(max-width: 480px)" srcSet={product.gallery.second.mobile} alt={product.name}/>
                    <img src={product.gallery.second.desktop} alt={product.name}/>
                </picture>
            </div>
            <div className={classes.secondCol}>
            <picture>
                <source media="(min-width: 800px)" srcSet={product.gallery.third.tablet} alt={product.name}/>
                <source media="(max-width: 480px)" srcSet={product.gallery.third.mobile} alt={product.name}/>
                <img src={product.gallery.third.desktop} alt={product.name}/>
            </picture>
            </div>
        </section>
  )
}

export default DoubleColumnGallery
