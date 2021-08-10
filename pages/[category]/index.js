import { productsData, categoryName } from '../../data'
import DoubleColumnProduct from '../../components/elements/DoubleColumnProduct'
import TripleColumnItems from '../../components/elements/TripleColumnItems'
import DoubleColumnItems from '../../components/elements/DoubleColumnItems'
import { useRouter } from 'next/router'

import { Fragment } from 'react'

export const getStaticProps = async (context) => {
  const category = context.params.category
  const Categoryproducts = productsData.filter(product => product.category === category)
  return {
    props: {
      products: Categoryproducts
    }
  }
}

export const getStaticPaths = async () => {
  const paths = categoryName.map(category => ({
    params: { category: category.name.toString() }
  }))
  return {
    paths,
    fallback: false
  }
}

function Category ({ products }) {
  const router = useRouter()

  const handleChangePage = (product) => {
    router.push({
      pathname: `${product.category}/${product.slug}`
    })
  }

  return (
      <Fragment>
          {products.map((product, index) => {
            if ((index + 1) % 2 !== 0) {
              return <DoubleColumnProduct key={product.id} product={product} inversion={false} action={() => handleChangePage(product)}/>
            } else {
              return <DoubleColumnProduct key={product.id} product={product} inversion={true} action={() => handleChangePage(product)}/>
            }
          })
          }
          <TripleColumnItems/>
          <DoubleColumnItems/>
      </Fragment>
  )
}

export default Category
