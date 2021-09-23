/**
 * @jest-environment jsdom
 */

import { render } from '../../test-utils'

import CategoryItem from '../../../components/elements/CategoryItem'

describe('CategoryItem component', () => {
  it('Rendered CategoryItem component', () => {
    const { getByTestId } = render(<CategoryItem/>)
    const catItem = getByTestId('CategoryItem')
    expect(catItem).toBeTruthy()
  })
})
