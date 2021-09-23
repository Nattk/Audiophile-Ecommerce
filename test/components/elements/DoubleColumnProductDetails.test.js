/**
 * @jest-environment jsdom
 */

import { render } from '../../test-utils'

import DoubleColumnProductDetails from '../../../components/elements/DoubleColumnProductDetails'

describe('DoubleColumnProductDetails component', () => {
  it('Rendered DoubleColumnProductDetails component', () => {
    const { getByTestId } = render(<DoubleColumnProductDetails/>)
    const DblColumnProductDetails = getByTestId('DoubleColumnProductDetails')
    expect(DblColumnProductDetails).toBeTruthy()
  })
})
