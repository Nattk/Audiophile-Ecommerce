import { Fragment, useContext } from 'react'
import { CartContext } from '../../store/cart-context'
import Button from '../UI/Button/Button'
import QuantityButton from '../UI/Button/QuantityButton'
import classes from './Cart.module.scss'

function Cart (props) {
  const cartCtx = useContext(CartContext).cartProducts
  const qtyHandler = useContext(CartContext).handleQty
  const total = useContext(CartContext).total
  console.log(cartCtx)

  return (
    <Fragment>
        {
        cartCtx &&
                <section className={classes.Cart}>
                    <div>
                        <p>Cart ({cartCtx.length})</p>
                        <p onClick={() => handleRemoveProduct()}>Remove All</p>
                    </div>
                    {cartCtx.map(prod => (
                    <div key={prod.id}>
                        <img className={classes.cartImage} src={`/assets/cart/image-${prod.product.slug}.jpg`} alt={prod.product.name}/>
                        <div className={classes.productInfo}>
                            <p>{prod.product.name}</p>
                            <p className='price' style={{ color: '#979797' }}>${prod.product.price}</p>
                        </div>
                        <QuantityButton qty={prod.quantity} id={prod.id} qtyHandler={qtyHandler} />
                    </div>
                    ))}
                    <div>
                        <p style={{ color: '#979797', textTransform: 'uppercase' }}>Total</p>
                        <p className='price'>$ {total}</p>
                    </div>
                    <Button type='standard' fullWidth={true} >Checkout</Button>
                </section>
            }
    </Fragment>

  )
}

export default Cart
