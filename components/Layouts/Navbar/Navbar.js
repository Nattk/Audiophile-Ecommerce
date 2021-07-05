import Link from 'next/link'
import classes from './Navbar.module.scss'
import Image from 'next/image'
import cart from '../../../public/assets/shared/desktop/icon-cart.svg'

function Navbar () {
  return (

    <div className={classes.navContainer}>
        <nav className={classes.nav}>
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
    </div>
  )
}

export default Navbar
