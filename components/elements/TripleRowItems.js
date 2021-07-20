import circle from '../../public/assets/home/desktop/pattern-circles.svg'
import classes from './TripleRowItems.module.scss'
import speaker from '../../public/assets/home/desktop/image-speaker-zx9.png'
import Image from 'next/image'
import Button from '../UI/Button/Button'

function TripleRowItems () {
  return (
        <section className={classes.tripleRow}>
          <div className={classes.row1}>
            <svg width="944" height="944" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" fill="none" fillRule="evenodd" opacity=".202"><circle cx="472" cy="472" r="235.5"/><circle cx="472" cy="472" r="270.5"/><circle cx="472" cy="472" r="471.5"/></g></svg>
            <div className={classes.speaker}>
              <div className={classes.img}>
              <Image src={speaker} width={350} height={500} alt="speaker"/>
              </div>
              <div className={classes.productDesc}>
                <p>ZX9 SPEAKER</p>
                <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <Button type="standard">See the product</Button>
              </div>
            </div>
          </div>
          <div className={classes.row2}>
            ZX7
          </div>
          <div className={classes.row3}>
            earphones
          </div>
          <div className={classes.row3col2}>
            earphones 2
          </div>

        </section>
  )
}

export default TripleRowItems
