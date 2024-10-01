import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('sould render header title', () => {
  render(<Header />);
  const headerTitle = screen.getByRole('heading', {name:"MacBook Air", level:1});
  expect(headerTitle).toBeInTheDocument();
  expect(headerTitle).toHaveClass('fw-bold')
});