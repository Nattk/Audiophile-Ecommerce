import layout from '../Layout.module.scss'
import classes from './Footer.module.scss'
import Link from 'next/link'

function Footer () {
  return (
        <footer className={`${layout.footer} ${classes.footer}`}>
            <div>
              <p>Audiophile</p>
              <p>Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio.
                Come and visit our demo facility - we’re open 7 days a week.</p>
            </div>
            <div>
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
            </nav>
            </div>
        </footer>
  )
}
export default Footer
