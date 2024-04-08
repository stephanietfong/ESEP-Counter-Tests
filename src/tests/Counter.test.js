import { render, screen } from '@testing-library/react';
import userEvent from  '@testing-library/user-event'
import "@testing-library/jest-dom"
import Counter from "../components/Counter";

beforeEach(() => {
  render(<Counter/>);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  screen.findByTestId('count');
  expect(screen.getByTestId('count')).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  userEvent.click(screen.getByText('+'));
  screen.findByTestId('count')

  expect(screen.getByTestId('count')).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  userEvent.click(screen.getByText('-'));
  screen.findByTestId('count')

  expect(screen.getByTestId('count')).toHaveTextContent('-1');
});
