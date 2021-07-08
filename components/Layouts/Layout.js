import Header from './Header/Header'
import Footer from './Footer/Footer'
import classes from './Layout.module.scss'
function Layout (props) {
  return (
    <div className={classes.Layout}>
      <Header className={classes.itema}/>
      <main className={classes.itemb}>
      {props.children}
      </main>
      <Footer className={classes.itemd}/>
    </div>

  )
}

export default Layout
