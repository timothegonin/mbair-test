import { render, screen } from '@testing-library/react';
import ProductInfos from '../ProductInfos';

describe('Product infos', () => {
  test('sould render the image, title and price', () => {
    render(<ProductInfos />);
    const productImage = screen.getByRole('img', {name: /macbookair/i});
    const productTitle = screen.getByRole('heading', {name:/macbook air - gris sidéral/i, level:5});
    const productPrice = screen.getByRole('heading', {name:"1199,00 €", level:4});
    expect(productImage).toBeInTheDocument()
    expect(productTitle).toBeInTheDocument()
    expect(productPrice).toBeInTheDocument()
    expect(productPrice).toHaveClass('green')
    expect(productPrice).toHaveTextContent('1199,00 €')
  });
})
