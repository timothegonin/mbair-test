import { render,screen } from "@testing-library/react"
import Validation from "../Validation"
import userEvent from "@testing-library/user-event"

describe('Validaiton component', () => {
  test('Displaying validation button', () => {
    render(<Validation nextLevel='confirmationStep'/>)    
    const buttonConfirmation = screen.getByRole('button', {name: /valider/i})
    expect(buttonConfirmation).toBeInTheDocument();
  })
  test('Displaying add to cart button', () => {
    render(<Validation nextLevel='cartStep'/>)    
    const buttonCart = screen.getByRole('button', {name: /ajouter au panier/i})
    expect(buttonCart).toBeInTheDocument();
  })
  test('Setter "setStep" used for confirmation', async () => {
    const user = userEvent.setup()
    const gotToConfirmationStep = jest.fn()
    render(<Validation setStep={gotToConfirmationStep} nextLevel="confirmationStep"/>)
    const buttonConfirmation = screen.getByRole('button', {name: /valider/i})
    await user.click(buttonConfirmation)
    expect(gotToConfirmationStep).toHaveBeenCalledTimes(1)
  })
  // test('Setter "setStep" used for cart', () => {

  // })
})