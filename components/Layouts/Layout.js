import Header from './Header/Header'
import Footer from './Footer/Footer'
import classes from './Layout.module.scss'
import Modal from '../UI/Button/modal'
import Card from '../UI/Button/Card'
import { useRouter } from 'next/router'
import { useState } from 'react'

function Layout (props) {
  const router = useRouter()
  const [modalVisibilty, setModalVisibility] = useState(false)

  return (
    <div className={classes.Layout}>
      {router.pathname === '/' &&
        <div className={`${classes.navContainer}`}></div>
      }
      <Header cartVisibility={modalVisibilty} cartClick={setModalVisibility}/>
      <main className={classes.main}>
      {props.children}
      <Modal visible={modalVisibilty}>
        <Card>
            <p>Cart</p>
        </Card>
      </Modal>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
