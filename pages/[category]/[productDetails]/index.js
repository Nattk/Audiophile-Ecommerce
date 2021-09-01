import { productsData } from '../../../data'
import DoubleColumnProduct from '../../../components/elements/DoubleColumnProduct'
import DoubleColumnProductDetails from '../../../components/elements/DoubleColumnProductDetails'
import DoubleColumnGallery from '../../../components/elements/DoubleColumnGallery'
import YouMayAlsoLike from '../../../components/elements/YouMayAlsoLike'
import DoubleColunmItems from '../../../components/elements/DoubleColumnItems'
import TripleColumnItems from '../../../components/elements/TripleColumnItems'
import { Fragment, useEffect, useState } from 'react'

export const getStaticProps = async (context) => {
  const productSlug = context.params.productDetails
  const product = productsData.filter(product => product.slug === productSlug)
  return {
    props: {
      product: product[0]
    }
  }
}

export const getStaticPaths = async () => {
  const paths = productsData.map(product => ({
    params: { productDetails: product.slug, category: product.category }
  }))
  return {
    paths,
    fallback: false
  }
}

function ProductDetails ({ product }) {
  const [cart, setCart] = useState()
  const [quantity, setQuantity] = useState(0)
  let updatedCart = []

  useEffect(() => {
    if (localStorage.getItem('cart')) {
      setCart(JSON.parse(localStorage.getItem('cart')))
    } else {
      setCart([])
    }
  }, [])

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

  return (
        <Fragment>
            <button>Go Back</button>
            <DoubleColumnProduct product={product} inversion={false} action={() => handleAddToCart(product)} qty={quantity} qtySet={setQuantity}/>
            <DoubleColumnProductDetails product={product}/>
            <DoubleColumnGallery product={product}/>
            <YouMayAlsoLike product={product}/>
            <TripleColumnItems/>
            <DoubleColunmItems/>
        </Fragment>
  )
}

export default ProductDetails
