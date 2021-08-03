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
        <DoubleColumnProduct inversion={false}>
            <Image src={Product} alt='product'/>
            <div className="productArea">
              <p className="new">New product</p>
              <h2>XX99 Mark II Headphones</h2>
              <p className="description">The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
              <Button type="standard">See the product</Button>
            </div>
        </DoubleColumnProduct>
        <DoubleColumnProduct inversion={true}>
            <div className="productArea">
              <p className="new">New product</p>
              <h2>XX99 Mark II Headphones</h2>
              <p className="description">The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
              <Button type="standard">See the product</Button>
            </div>
              <Image src={Product} alt='product'/>
        </DoubleColumnProduct>
        <DoubleColumnGallery/>
        <DoubleColumnProductDetails/>
    </Fragment>

  )
}
