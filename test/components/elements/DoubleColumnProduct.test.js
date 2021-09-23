/**
 * @jest-environment jsdom
 */

import { render } from '../../test-utils'

import DoubleColumnProduct from '../../../components/elements/DoubleColumnProduct'

describe('DoubleColumnProduct component', () => {
  it('Rendered DoubleColumnProduct component', () => {
    const { getByTestId } = render(<DoubleColumnProduct/>)
    const DblColumnProduct = getByTestId('DoubleColumnProduct')
    expect(DblColumnProduct).toBeTruthy()
  })
})
