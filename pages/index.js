import Head from 'next/head'
import TripleColumnItems from '../components/elements/TripleColumnItems'
import { Fragment } from 'react'

export default function Home () {
  return (
    <Fragment>
      <Head>
        <title>Audiophile E-commerce</title>
        <meta name="description" content="Audiophile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <TripleColumnItems/>
    </Fragment>

  )
}
