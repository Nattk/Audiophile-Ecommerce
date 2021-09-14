import Link from 'next/link'
import classes from './Header.module.scss'
import layout from '../Layout.module.scss'
import { Fragment, useState } from 'react'
import SubHeader from './SubHeader'
import Card from '../../UI/Button/Card'
import Cart from '../../elements/Cart'
import { useRouter } from 'next/router'

function Header (props) {
  const router = useRouter()
  const [cartDisplay, setCartDisplay] = useState(false)

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
                <div className={classes.Cart}>
                    <img src='/assets/shared/desktop/icon-cart.svg' alt="cart" onClick={() => setCartDisplay(!cartDisplay)}/>
                    <div style={{ display: cartDisplay ? 'block' : 'none' }}>
                        <Card>
                            <Cart/>
                        </Card>
                    </div>
                </div>

            </nav>
            <SubHeader/>
        </header>
        <div className={layout.rightHeader} style = {{ backgroundColor: router.pathname !== '/' ? 'black' : 'transparent' }}></div>
    </Fragment>

  )
}

export default Header
