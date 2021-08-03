import { productsData, categoryName } from '../../data'
import DoubleColumnProduct from '../../components/elements/DoubleColumnProduct'
import TripleColumnItems from '../../components/elements/TripleColumnItems'
import DoubleColumnItems from '../../components/elements/DoubleColumnItems'

import { Fragment } from 'react'

export const getStaticProps = async (context) => {
  console.log(context)
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
  console.log(products)
  return (
      <Fragment>
          {products.map((product, index) => {
            if ((index + 1) % 2 !== 0) {
              return <DoubleColumnProduct key={product.id} product={product} inversion={false}/>
            } else {
              return <DoubleColumnProduct key={product.id} product={product} inversion={true}/>
            }
          })
          }
          <TripleColumnItems/>
          <DoubleColumnItems/>
      </Fragment>
  )
}

export default Category
