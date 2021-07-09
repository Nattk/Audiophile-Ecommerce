import classes from './CategoryItem.module.scss'
import Image from 'next/image'
import Headphones from '../../public/assets/shared/desktop/image-headphones.png'

function CategoryItem () {
  return (
        <div className={classes.CategoryItem}>
            <div><p>Headphones</p></div>
            <Image src={Headphones} alt="Headphones"/>

        </div>
  )
}

export default CategoryItem
