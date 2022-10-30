import { render, screen } from '@testing-library/react';
import App from '../App';

test('render tab component', () => {
  render(<App />);
  const element = screen.getByTestId('tab');
  expect(element).toBeInTheDocument();
});
