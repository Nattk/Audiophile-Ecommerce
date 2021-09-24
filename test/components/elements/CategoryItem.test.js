/**
 * @jest-environment jsdom
 */

import { render } from '../../test-utils'
import { categoryName } from '../../../data'

import CategoryItem from '../../../components/elements/CategoryItem'

describe('CategoryItem component', () => {
  it('Rendered CategoryItem component', () => {
    const { getByTestId } = render(<CategoryItem/>)
    const catItem = getByTestId('CategoryItem')
    expect(catItem).toBeTruthy()
  })

  it('Rendered CategoryItem component', () => {
    const { getByTestId } = render(<CategoryItem category={categoryName[0].name}/>)
    const catItemName = getByTestId('category')
    expect(catItemName).toHaveTextContent(categoryName[0].name)
  })
})
