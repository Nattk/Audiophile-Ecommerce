/**
 * @jest-environment jsdom
 */

import { productsData } from '../../../data'
import { render } from '../../test-utils'
import DoubleColumnProduct from '../../../components/elements/DoubleColumnProduct'
let useRouter

beforeAll(() => {
  useRouter = jest.spyOn(require('next/router'), 'useRouter')
})

describe('DoubleColumnProduct component', () => {
  it('Rendered DoubleColumnProduct component', () => {
    useRouter.mockImplementationOnce(() => ({
      pathname: '/[category]/[productDetails]'
    }))
    const { getByTestId } = render(<DoubleColumnProduct product={productsData[0]}/>)
    const DblColumnProduct = getByTestId('DoubleColumnProduct')
    expect(DblColumnProduct).toBeTruthy()
  })
})

describe('DoubleColumnProduct component images', () => {
  it('Product Image', () => {
    useRouter.mockImplementationOnce(() => ({
      pathname: '/[category]/[productDetails]'
    }))
    const { getByTestId } = render(<DoubleColumnProduct product={productsData[0]}/>)
    const img = getByTestId('productDetailsImg')
    expect(img).toHaveAttribute('src', productsData[0].image.desktop)
  })

  it('Category Image', () => {
    useRouter.mockImplementationOnce(() => ({
      pathname: '/[category]'
    }))
    const { getByTestId } = render(<DoubleColumnProduct product={productsData[0]}/>)
    const img = getByTestId('categoryImg')
    expect(img).toHaveAttribute('src', productsData[0].imageCategory.desktop)
  })
})

describe('DoubleColumnProduct component product area', () => {
  it('See the product appears', () => {
    useRouter.mockImplementationOnce(() => ({
      pathname: '/[category]'
    }))
    const { getByText } = render(<DoubleColumnProduct product={productsData[0]}/>)
    const seeProduct = getByText('see the product')
    expect(seeProduct).toBeTruthy()
  })

  it('Add the product button appears', () => {
    useRouter.mockImplementationOnce(() => ({
      pathname: '/[category]/[productDetails]'
    }))
    const { getByText } = render(<DoubleColumnProduct product={productsData[0]}/>)
    const addProduct = getByText('add product')
    expect(addProduct).toBeTruthy()
  })
})
