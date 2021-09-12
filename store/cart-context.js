import React, { useEffect, useState } from 'react'

export const CartContext = React.createContext({
  cartProducts: []
})

function CartCtx (props) {
  const [cart, setCart] = useState()
  useEffect(() => {
    if (localStorage.getItem('cart')) {
      setCart(JSON.parse(localStorage.getItem('cart')))
    } else {
      setCart([])
    }
  }, [])

  return (
          <CartContext.Provider value={{ cartProducts: cart }}>
              {props.children}
          </CartContext.Provider>
  )
}

export default CartCtx
