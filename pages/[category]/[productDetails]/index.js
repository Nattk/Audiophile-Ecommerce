import { productsData } from '../../../data'
import DoubleColumnProduct from '../../../components/elements/DoubleColumnProduct'
import DoubleColumnProductDetails from '../../../components/elements/DoubleColumnProductDetails'
import DoubleColumnGallery from '../../../components/elements/DoubleColumnGallery'
import YouMayAlsoLike from '../../../components/elements/YouMayAlsoLike'
import DoubleColunmItems from '../../../components/elements/DoubleColumnItems'
import TripleColumnItems from '../../../components/elements/TripleColumnItems'
import { Fragment } from 'react'
import { useRouter } from 'next/router'

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
  const router = useRouter()

  return (
        <Fragment>
            <button
              style={{ color: '#979797', background: 'none', border: 'none', cursor: 'pointer', width: '5rem', margin: '2rem 0 2rem 0' }}
              onClick={() => router.back()}
              >Go Back</button>
            <DoubleColumnProduct product={product} inversion={false}/>
            <DoubleColumnProductDetails product={product}/>
            <DoubleColumnGallery product={product}/>
            <YouMayAlsoLike product={product}/>
            <TripleColumnItems/>
            <DoubleColunmItems/>
        </Fragment>
  )
}

export default ProductDetails
