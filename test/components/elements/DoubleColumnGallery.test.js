/**
 * @jest-environment jsdom
 */

import { render } from '../../../test-utils'

import DoubleColumnGallery from '../../../../components/elements/DoubleColumnGallery'

describe('Cart component', () => {
  it('Rendered DoubleColumnGallery component', () => {
    const { getByTestId } = render(<DoubleColumnGallery/>)
    const DblColumnGallery = getByTestId('DoubleColumnGallery')
    expect(DblColumnGallery).toBeTruthy()
  })
})
