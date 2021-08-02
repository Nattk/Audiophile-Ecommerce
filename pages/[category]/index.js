import { productsData, categoryName } from '../../data'
import DoubleColumnProduct from '../../components/elements/DoubleColumnProduct'
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
          {products.map(product => (
              <DoubleColumnProduct key={product.id} inversion={false}/>
          ))
          }

      </Fragment>
  )
}

export default Category
