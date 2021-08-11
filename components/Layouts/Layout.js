import Header from './Header/Header'
import Footer from './Footer/Footer'
import classes from './Layout.module.scss'
import Modal from '../UI/Button/Modal'
import Card from '../UI/Button/Card'
import Cart from '../elements/Cart'
import { useRouter } from 'next/router'
import { useState } from 'react'

function Layout (props) {
  const router = useRouter()
  const [modalVisibilty, setModalVisibility] = useState(false)

  const handleModalVisibility = () => {
    setModalVisibility(!modalVisibilty)
  }

  return (
    <div className={classes.Layout}>
      {router.pathname === '/' &&
        <div className={`${classes.navContainer}`}></div>
      }
      <Header cartClicked={handleModalVisibility}/>
      <main className={classes.main}>
      {props.children}
      <Modal visible={modalVisibilty}>
        <Card modalClosed={handleModalVisibility}>
          <Cart/>
        </Card>
      </Modal>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
