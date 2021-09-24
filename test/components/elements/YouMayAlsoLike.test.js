/**
 * @jest-environment jsdom
 */

import { productsData } from '../../../data'
import { render } from '../../test-utils'

import YouMayAlsoLike from '../../../components/elements/YouMayAlsoLike'

describe('YouMayAlsoLike component', () => {
  it('Rendered YouMayAlsoLike component', () => {
    const { getByTestId } = render(<YouMayAlsoLike product={productsData[0]}/>)
    const YMayAlsoLike = getByTestId('YouMayAlsoLike')
    expect(YMayAlsoLike).toBeTruthy()
  })
})
