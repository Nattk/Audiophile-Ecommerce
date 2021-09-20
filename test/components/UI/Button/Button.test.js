/**
 * @jest-environment jsdom
 */

import { render, fireEvent } from '../../../test-utils'

import Button from '../../../../components/UI/Button/Button'

describe('Button component', () => {
  it('Rendered input', () => {
    const { getByTestId } = render(<Button>Bouton</Button>)
    const button = getByTestId('button')
    expect(button).toBeTruthy()
  })

  it('Rendered standard button', () => {
    const { getByTestId } = render(<Button type="standard">Bouton</Button>)
    const button = getByTestId('buttonStandard')
    expect(button).toBeTruthy()
  })

  it('Rendered arrow button', () => {
    const { getByTestId } = render(<Button type="arrow">Bouton</Button>)
    const button = getByTestId('arrowButton')
    expect(button).toBeTruthy()
  })

  it('Rendered black button', () => {
    const { getByTestId } = render(<Button type="black">Bouton</Button>)
    const button = getByTestId('blackButton')
    expect(button).toBeTruthy()
  })

  it('Calls the function from the clicked props when click event happen', () => {
    const handleClick = jest.fn()
    const { getByTestId } = render(<Button clicked={handleClick} type="standard">Bouton</Button>)
    const button = getByTestId('buttonStandard')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
