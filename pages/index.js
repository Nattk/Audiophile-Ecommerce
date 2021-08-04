import Head from 'next/head'
import TripleColumnItems from '../components/elements/TripleColumnItems'
import { Fragment } from 'react'
import Button from '../components/UI/Button/Button'
import TripleRowItems from '../components/elements/TripleRowItems'
import DoubleColumnItems from '../components/elements/DoubleColumnItems'
import DoubleColumnProduct from '../components/elements/DoubleColumnProduct'
import Image from 'next/image'
import Product from '../public/assets/category-headphones/desktop/image-xx59.jpg'
import DoubleColumnGallery from '../components/elements/DoubleColumnGallery'
import DoubleColumnProductDetails from '../components/elements/DoubleColumnProductDetails'
import YouMayAlsoLike from '../components/elements/YouMayAlsoLike'

export default function Home () {
  return (
    <Fragment>
      <Head>
        <title>Audiophile E-commerce</title>
        <meta name="description" content="Audiophile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <TripleColumnItems/>
        <YouMayAlsoLike/>
        <TripleRowItems/>
        <DoubleColumnItems/>
        <DoubleColumnGallery/>
        <DoubleColumnProductDetails/>
    </Fragment>

  )
}
