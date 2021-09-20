/**
 * @jest-environment jsdom
 */

import { render, fireEvent } from '../../../test-utils'

import QuantityButton from '../../../../components/UI/Button/QuantityButton'

describe('Button component', () => {
  it('Rendered Quantity component', () => {
    const { getByTestId } = render(<QuantityButton/>)
    const qtybutton = getByTestId('quantityButton')
    expect(qtybutton).toBeTruthy()
  })

  it('Rendered Quantity component with the qty prop', () => {
    const { getByTestId } = render(<QuantityButton qty={3}/>)
    const qtybutton = getByTestId('quantityButton')
    expect(qtybutton).toContainHTML('<p>3</p>')
  })
})
