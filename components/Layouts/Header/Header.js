import Link from 'next/link'
import classes from './Header.module.scss'
import layout from '../Layout.module.scss'
import Image from 'next/image'
import cart from '../../../public/assets/shared/desktop/icon-cart.svg'
import { Fragment } from 'react'
import SubHeader from './SubHeader'

function Header () {
  return (
     <Fragment>
        <header className={`${layout.header}`}>
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
    </Fragment>

  )
}

export default Header
