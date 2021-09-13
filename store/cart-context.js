import React, { useEffect, useState } from 'react'

export const CartContext = React.createContext({
  cartProducts: []
})

function CartCtx (props) {
  const [cart, setCart] = useState()
  const [total, setTotal] = useState(0)
  const [quantity, setQuantity] = useState(0)

  let updatedCart = []

  function handleQuantity (id, action) {
    let newCart
    if (action === '-') {
      newCart = cart.map(obj =>
        obj.id === id ? { ...obj, quantity: obj.quantity - 1 } : obj
      )
    } else {
      newCart = cart.map(obj =>
        obj.id === id ? { ...obj, quantity: obj.quantity + 1 } : obj
      )
    }

    setCart(newCart)
  }

  function calculTotal () {
    console.log('total')
    let newTotal = 0
    for (let i = 0; i < cart.length; i++) {
      console.log(cart[i])
      newTotal = newTotal + cart[i].product.price * cart[i].quantity
    }
    return newTotal
  }

  const handleAddToCart = (product) => {
    if (cart.length) {
      updatedCart = [...cart]
      for (let i = 0; i < updatedCart.length; i++) {
        if (updatedCart[i].id === product.id) {
          updatedCart[i].quantity = updatedCart[i].quantity + quantity
          setCart(updatedCart)
        } else {
          const newProductCart = [...updatedCart]
          newProductCart.push({ id: product.id, product: product, quantity: quantity })
          setCart(newProductCart)
        }
      }
    } else {
      updatedCart.push({ id: product.id, product: product, quantity: quantity })
      setCart(updatedCart)
    }
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  useEffect(() => {
    if (localStorage.getItem('cart')) {
      setCart(JSON.parse(localStorage.getItem('cart')))
    } else {
      setCart([])
    }
  }, [])

  useEffect(() => {
    if (cart) {
      localStorage.setItem('cart', JSON.stringify(cart))
      setTotal(calculTotal())
    }
  }, [cart])

  return (
          <CartContext.Provider value={{
            cartProducts: cart,
            total: total,
            qty: quantity,
            handleQty: handleQuantity,
            handleAdd: handleAddToCart,
            setQty: setQuantity
          }}>
              {props.children}
          </CartContext.Provider>
  )
}

export default CartCtx
