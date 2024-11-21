import { render,screen } from "@testing-library/react"
import Validation from "../Validation"

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
})