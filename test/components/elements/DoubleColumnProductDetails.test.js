/**
 * @jest-environment jsdom
 */

import { productsData } from '../../../data'
import { render } from '../../test-utils'

import DoubleColumnProductDetails from '../../../components/elements/DoubleColumnProductDetails'

describe('DoubleColumnProductDetails component', () => {
  it('Rendered DoubleColumnProductDetails component', () => {
    const { getByTestId } = render(<DoubleColumnProductDetails product={productsData[0]}/>)
    const DblColumnProductDetails = getByTestId('DoubleColumnProductDetails')
    expect(DblColumnProductDetails).toBeTruthy()
  })
})
