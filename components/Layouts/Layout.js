import Header from './Header/Header'
import Footer from './Footer/Footer'
import classes from './Layout.module.scss'
function Layout (props) {
  return (
    <div className={classes.Layout}>
      <div className={`${classes.navContainer}`}></div>
      <Header/>
      <main className={classes.main}>
      {props.children}
      </main>
      <Footer/>
    </div>

  )
}

export default Layout
