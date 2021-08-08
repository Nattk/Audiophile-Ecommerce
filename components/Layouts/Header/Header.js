import Link from 'next/link'
import classes from './Header.module.scss'
import layout from '../Layout.module.scss'
import Image from 'next/image'
import cart from '../../../public/assets/shared/desktop/icon-cart.svg'
import { Fragment } from 'react'
import SubHeader from './SubHeader'
import { useRouter } from 'next/router'

function Header (props) {
  const router = useRouter()

  return (
     <Fragment>
      <div className={layout.leftHeader} style = {{ backgroundColor: router.pathname !== '/' ? 'black' : 'transparent' }}></div>
        <header className={`${layout.header}`} style = {{ backgroundColor: router.pathname !== '/' ? 'black' : 'transparent' }}>
            <nav className={`${classes.nav}`}>
                <p>audiophile</p>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/headphones">Headphones</Link>
                    </li>
                    <li>
                        <Link href="/speakers">Speakers</Link>
                    </li>
                    <li>
                        <Link href="/earphones">Earphones</Link>
                    </li>
                </ul>
                <div className={classes.Cart} onClick={props.cartClicked}>
                    <Image src={cart} alt="cart"/>
                 </div>

            </nav>
            <SubHeader/>
        </header>
        <div className={layout.rightHeader} style = {{ backgroundColor: router.pathname !== '/' ? 'black' : 'transparent' }}></div>
    </Fragment>

  )
}

export default Header
