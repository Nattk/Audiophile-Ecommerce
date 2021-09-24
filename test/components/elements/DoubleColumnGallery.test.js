/**
 * @jest-environment jsdom
 */

import { productsData } from '../../../data'
import { render } from '../../test-utils'

import DoubleColumnGallery from '../../../components/elements/DoubleColumnGallery'

describe('DoubleColumnGallery component', () => {
  it('Rendered DoubleColumnGallery component', () => {
    const { getByTestId } = render(<DoubleColumnGallery product={productsData[0]}/>)
    const DblColumnGallery = getByTestId('DoubleColumnGallery')
    expect(DblColumnGallery).toBeTruthy()
  })
})
