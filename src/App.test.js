import { render, screen } from '@testing-library/react';
import App from './App';


test('renders the heading', () => {
  render(<App />);
  const element = screen.getByText(/To Do List/i);
  expect(element).toBeInTheDocument();
});

test('renders the input box', () => {
  render(<App />);
  const element = screen.getByRole("textbox");
  expect(element).toBeInTheDocument();
});

test('renders the list', () => {
  render(<App />);
  const element = screen.getByRole("list");
  expect(element).toBeInTheDocument();
});

test('renders the add button', () => {
  render(<App />);
  const element = screen.getByRole("button");
  expect(element).toBeInTheDocument();
});