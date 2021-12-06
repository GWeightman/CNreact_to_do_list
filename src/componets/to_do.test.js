import { render, screen } from '@testing-library/react';
import To_do from './to_do';

const mock = [
    "test1",
    "test2"
]

test('renders the heading', () => {
  render(<To_do to_do={mock}/>);
  const element = screen.getAllByTestId("to_doItem");
  expect(element.length).toBe(3);
});