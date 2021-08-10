import { productsData } from '../../../data'
import DoubleColumnProduct from '../../../components/elements/DoubleColumnProduct'
import DoubleColumnProductDetails from '../../../components/elements/DoubleColumnProductDetails'
import DoubleColumnGallery from '../../../components/elements/DoubleColumnGallery'
import YouMayAlsoLike from '../../../components/elements/YouMayAlsoLike'
import DoubleColunmItems from '../../../components/elements/DoubleColumnItems'
import TripleColumnItems from '../../../components/elements/TripleColumnItems'
import { Fragment, useState } from 'react'
import { createPortal } from 'react-dom'
import Card from '../../../components/UI/Button/Card'

export const getStaticProps = async (context) => {
  console.log(context)
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
  const [cart, setCart] = useState([])
  const [quantity, setQuantity] = useState(0)

  const handleAddToCart = (product) => {
    console.log('handleAdd')
    const updatedCart = [...cart]
    console.log(quantity)
    if (updatedCart.length === 0 && quantity > 0) {
      console.log('if')
      setCart(updatedCart.push({ id: product.id, product: product, quantity: quantity }))
    } else {
      for (let i = 0; i < updatedCart.length; i++) {
        if (updatedCart[0].id === product.id) {
          updatedCart[0].quantity = updatedCart[0].quantity + quantity
        }
        setCart(updatedCart)
      }
    }
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
