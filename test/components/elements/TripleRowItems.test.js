/**
 * @jest-environment jsdom
 */

import { render } from '../../test-utils'

import TripleColumnItems from '../../../components/elements/TripleColumnItems'

describe('TripleColumnItems component', () => {
  it('Rendered TripleColumnItems component', () => {
    const { getByTestId } = render(<TripleColumnItems/>)
    const TrplColumnItems = getByTestId('TripleColumnItems')
    expect(TrplColumnItems).toBeTruthy()
  })
})
