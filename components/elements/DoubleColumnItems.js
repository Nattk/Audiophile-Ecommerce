import classes from './DoubleColumnItems.module.scss'

function DoubleColumnItem () {
  return (
        <section className={classes.doubleColumn} data-testid="DoubleColumnItems">
            <div className={classes.textColumn}>
                <h2> Bringing you the <span>best</span> audio gear</h2>
                <p>
                Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories.
                We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products.
                Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </p>
            </div>
            <div className={classes.imageColumn}>
            <picture>
                <source media="screen and (min-device-width:480px) and (max-device-width: 768px)" srcSet='/assets/shared/tablet/image-best-gear.jpg' alt='best gear'/>
                <source media="screen and (min-device-width:480px) and (max-device-width: 768px) " srcSet='/assets/shared/mobile/image-best-gear.jpg' alt='best gear'/>
                <img src='/assets/shared/desktop/image-best-gear.jpg' alt='best gear'/>
            </picture>
            </div>
        </section>
  )
}

export default DoubleColumnItem
