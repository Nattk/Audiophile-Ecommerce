import Header from './Header/Header'
import Footer from './Footer/Footer'
import classes from './Layout.module.scss'
import { useRouter } from 'next/router'

function Layout (props) {
  const router = useRouter()

  return (
    <div className={classes.Layout}>
      {router.pathname === '/' &&
        <div className={`${classes.navContainer}`}></div>
      }
      <Header/>
      <main className={classes.main}>
      {props.children}
      </main>
      <Footer/>
    </div>

  )
}

export default Layout
