import Link from 'next/link'
import classes from './Header.module.scss'
import layout from '../Layout.module.scss'
import Image from 'next/image'
import cart from '../../../public/assets/shared/desktop/icon-cart.svg'
import { Fragment } from 'react'
import SubHeader from './SubHeader'
import { useRouter } from 'next/router'

function Header () {
  const router = useRouter()
  return (
     <Fragment>
      <div className={layout.leftHeader} style = {{ backgroundColor: router.pathname !== '/' ? 'black' : 'transparent' }}></div>
        <header className={`${layout.header}`} style = {{ backgroundColor: router.pathname !== '/' ? 'black' : 'none' }}>
            <nav className={`${classes.nav}`}>
                <p>audiophile</p>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/">Headphones</Link>
                    </li>
                    <li>
                        <Link href="/">Speakers</Link>
                    </li>
                    <li>
                        <Link href="/">Earphones</Link>
                    </li>
                </ul>
                    <Image src={cart} alt="cart"/>
            </nav>
            <SubHeader/>
        </header>
        <div className={layout.rightHeader} style = {{ backgroundColor: router.pathname !== '/' ? 'black' : 'transparent' }}></div>
    </Fragment>

  )
}

export default Header
