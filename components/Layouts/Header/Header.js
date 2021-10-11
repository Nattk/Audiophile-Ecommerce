import Link from 'next/link'
import classes from './Header.module.scss'
import layout from '../Layout.module.scss'
import { Fragment, useState } from 'react'
import SubHeader from './SubHeader'
import Card from '../../UI/Button/Card'
import Cart from '../../elements/Cart'
import { useRouter } from 'next/router'
import TripleColumnItems from '../../elements/TripleColumnItems'

function Header (props) {
  const router = useRouter()
  const [cartDisplay, setCartDisplay] = useState(false)
  const [menuDisplay, setMenuDisplay] = useState(false)

  const menu = () => {
    setMenuDisplay(!menuDisplay)
    setCartDisplay(false)
  }

  return (
     <Fragment>
        <header className={`${layout.header}`} style = {{ backgroundColor: router.pathname !== '/' ? 'black' : 'transparent' }}>
            <nav className={`${classes.nav}`}>
            <div className={classes.Menu}>
             <img src='/assets/shared/tablet/icon-hamburger.svg' onClick={() => menu()}/>
                <div style={{ display: menuDisplay ? 'block' : 'none' }}>
                    <Card>
                        <TripleColumnItems/>
                    </Card>
                </div>
            </div>

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
    </Fragment>

  )
}

export default Header
