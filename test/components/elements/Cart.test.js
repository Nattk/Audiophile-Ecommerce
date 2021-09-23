/**
 * @jest-environment jsdom
 */

import { render } from '../../test-utils'

import Cart from '../../../components/elements/Cart'

describe('Cart component', () => {
  it('Rendered Quantity component', () => {
    const { getByTestId } = render(<Cart/>)
    const cart = getByTestId('Cart')
    expect(cart).toBeTruthy()
  })
})
