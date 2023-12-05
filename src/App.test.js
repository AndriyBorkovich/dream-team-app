import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  test('renders App component', () => {
    const { getByText } = render(<App />);

    const headerElement = getByText(/Our dream team/i);
    expect(headerElement).toBeInTheDocument();

  });
});
