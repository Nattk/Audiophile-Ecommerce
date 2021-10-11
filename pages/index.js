import Head from 'next/head'
import TripleColumnItems from '../components/elements/TripleColumnItems'
import { Fragment } from 'react'
import TripleRowItems from '../components/elements/TripleRowItems'
import DoubleColumnItems from '../components/elements/DoubleColumnItems'

export default function Home () {
  return (
    <Fragment>
      <Head>
        <title>Audiophile E-commerce</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Audiophile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <TripleColumnItems/>
        <TripleRowItems/>
        <DoubleColumnItems/>
    </Fragment>

  )
}
