import classes from './DoubleColumnProductDetails.module.scss'

function DoubleColumnProductDetails (props) {
  const product = props.product

  return (
        <section className={classes.productDetails} data-testid="DoubleColumnProductDetails">
            <div>
                <h3>features</h3>
                <br/>
                <br/>
                <p>
                    {product.features}
                </p>
            </div>
            <aside>
                <div>
                    <h3>In the box</h3>
                    <br/>
                    <br/>
                    <ul>
                        {product.includes.map((accessories, i) => (
                            <li key={i}><span>{accessories.quantity}</span><p>{accessories.item}</p></li>
                        ))
                        }
                    </ul>
                </div>
            </aside>
        </section>
  )
}

export default DoubleColumnProductDetails
