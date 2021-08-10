import classes from './CategoryItem.module.scss'
import Image from 'next/image'
import Headphones from '../../public/assets/shared/desktop/image-headphones.png'
import Speakers from '../../public/assets/shared/desktop/image-speakers.png'
import Earphones from '../../public/assets/shared/desktop/image-earphones.png'

import Button from '../UI/Button/Button'

function CategoryItem (props) {
  const category = props.category
  let item
  switch (category) {
    case 'headphones':
      item = (<Image src={Headphones} alt="Headphones" width={230} height={230}/>)
      break
    case 'speakers':
      item = (<Image src={Speakers} alt="Speakers" width={230} height={230}/>)
      break
    case 'earphones':
      item = (<Image src={Earphones} alt="Earphones" width={230} height={230}/>)
      break
    default:
      item = (<Image src={Earphones} alt="Earphones" width={230} height={230}/>)
      break
  }
  return (
        <div className={classes.CategoryItem}>
            <div className={classes.imgContainer}>
              {item}
              <p>{category}</p>
              <Button type="arrow" clicked={props.action}>Shop</Button>
            </div>
            <div className={classes.categoryName}></div>
        </div>
  )
}

export default CategoryItem
