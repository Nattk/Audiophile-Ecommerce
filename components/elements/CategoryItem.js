import classes from './CategoryItem.module.scss'
import Button from '../UI/Button/Button'

function CategoryItem (props) {
  const category = props.category
  let item
  switch (category) {
    case 'headphones':
      item = (
        <img src={'/assets/shared/desktop/image-headphones.png'} alt="Headphones" className={classes.img}/>
      )
      break
    case 'speakers':
      item = (
       <img src={'/assets/shared/desktop/image-speakers.png'} alt="Speakers" className={classes.img}/>
      )
      break
    case 'earphones':
      item = (<img src={'/assets/shared/desktop/image-earphones.png'} alt="Earphones" className={classes.img}/>)
      break
    default:
      item = (<img src={'/assets/shared/desktop/image-earphones.png'} alt="Earphones" className={classes.img}/>)
      break
  }
  return (
        <div className={classes.CategoryItem} data-testid="CategoryItem">
            <div className={classes.imgContainer}>
              {item}
              <p data-testid='category'>{category}</p>
              <Button type="arrow" clicked={props.action}>Shop</Button>
            </div>
            <div className={classes.categoryName}></div>
        </div>
  )
}

export default CategoryItem
