import classes from './DoubleColumnProductDetails.module.scss'

function DoubleColumnProductDetails () {
  return (
        <section className={classes.productDetails}>
            <div>
                <h3>features</h3>
                <br/>
                <br/>
                <p>
                    These headphones have been created from durable, high-quality materials tough enough to take anywhere.
                    Its compact folding design fuses comfort and minimalist style making it perfect for travel.
                    Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.</p>
                <p>
                <br/>
                <br/>
                    More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone.
                    Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones,
                    you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.
                </p>
            </div>
            <aside>
                <div>
                    <h3>In the box</h3>
                    <br/>
                    <br/>
                    <ul>
                        <li><span>1x</span><p>Headphone Unit</p></li>
                        <li><span>1x</span><p>Headphone Unit</p></li>
                        <li><span>1x</span><p>Headphone Unit</p></li>
                        <li><span>1x</span><p>Headphone Unit</p></li>
                    </ul>
                </div>
            </aside>
        </section>
  )
}

export default DoubleColumnProductDetails
