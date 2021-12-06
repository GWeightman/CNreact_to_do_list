import { render, screen } from '@testing-library/react';
import Addtask from './add';

test('check onchange event', () => {
  render(<Addtask />);
  const element = screen.getByPlaceholderText(" ");
  expect(element).toBeInTheDocument();
});