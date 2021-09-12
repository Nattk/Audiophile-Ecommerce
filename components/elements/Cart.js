import { Fragment, useEffect, useState, useContext } from 'react'
import { CartContext } from '../../store/cart-context'
import Button from '../UI/Button/Button'
import QuantityButton from '../UI/Button/QuantityButton'
import classes from './Cart.module.scss'

function Cart (props) {
  const [cart, setCart] = useState()
  const [total, setTotal] = useState(0)
  const ctx = useContext(CartContext)
  console.log(ctx)
  function handleQuantity (newQuantity, id) {
    const cartCopy = cart
    console.log(cart)
    for (let i = 0; i < cartCopy.length; i++) {
      if (cartCopy[i].id === id) {
        console.log('here')
        cartCopy[i].quantity = newQuantity
      }
    }
    console.log(cartCopy)
    setCart(cartCopy)
  }

  function calculTotal () {
    let newTotal = total
    for (let i = 0; i < cart.length; i++) {
      console.log(cart[i])
      newTotal = newTotal + cart[i].product.price * cart[i].quantity
    }
    console.log(newTotal)
    return newTotal
  }

  useEffect(() => {
    if (localStorage.getItem('cart')) {
      setCart(JSON.parse(localStorage.getItem('cart')))
    } else {
      setCart([])
    }
  }, [])

  useEffect(() => {
    console.log('total')
    if (cart) {
      setTotal(calculTotal())
    }
  }, [cart])

  const empty = (
      <p>Your cart is empty</p>
  )

  return (
    <Fragment>
        {
        cart &&
                <section className={classes.Cart}>
                    <div>
                        <p>Cart ({cart.length})</p>
                        <p onClick={() => handleRemoveProduct()}>Remove All</p>
                    </div>
                    {cart.map(prod => (
                    <div key={prod.id}>
                        <img className={classes.cartImage} src={`/assets/cart/image-${prod.product.slug}.jpg`} alt={prod.product.name}/>
                        <div className={classes.productInfo}>
                            <p>{prod.product.name}</p>
                            <p className='price' style={{ color: '#979797' }}>${prod.product.price}</p>
                        </div>
                        <QuantityButton qty={prod.quantity} id={prod.id} qtyHandler={handleQuantity} />
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
