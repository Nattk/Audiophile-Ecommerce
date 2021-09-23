/**
 * @jest-environment jsdom
 */

import { render, fireEvent, screen } from '../../../test-utils'

import QuantityButton from '../../../../components/UI/Button/QuantityButton'

describe('Button component', () => {
  it('Rendered Quantity component', () => {
    const { getByTestId } = render(<QuantityButton/>)
    const qtybutton = getByTestId('quantityButton')
    expect(qtybutton).toBeTruthy()
  })

  it('Rendered Quantity component with the right quantity', () => {
    const quantityProp = 3
    const { getByTestId } = render(<QuantityButton qty={quantityProp}/>)
    const qty = getByTestId('quantity-input')
    expect(qty).toHaveTextContent('3')
    expect(qty).not.toHaveTextContent('4')
  })
})
