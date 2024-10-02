import { render, screen } from '@testing-library/react';
import ProductInfos from '../ProductInfos';

test('sould render product informations', () => {
  render(<ProductInfos />);
  const productImage = screen.getByAltText('macbookAir');
  const productTitle = screen.getByRole('heading', {name:"MacBook Air - Gris sidéral", level:5});
  const productPrice = screen.getByRole('heading', {name:"1199,00 €", level:4});
  expect(productImage).toBeInTheDocument()
  expect(productTitle).toBeInTheDocument()
  expect(productPrice).toBeInTheDocument()
});