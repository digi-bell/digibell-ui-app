import { render, screen, fireEvent } from '@testing-library/react';
import SignUp from '../SignUp';

test('renders sign up form', () => {
  render(<SignUp />);
  
  // Check if the form elements are rendered
  expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/remember me/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument();
});

test('submits form with correct data', () => {
  render(<SignUp />);
  
  // Fill in the form fields
  fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });
  fireEvent.change(screen.getByLabelText(/confirm password/i), { target: { value: 'password123' } });
  
  // Submit the form
  fireEvent.click(screen.getByRole('button', { name: /sign up/i }));
  
  // Check if the form data is logged correctly
  expect(console.log).toHaveBeenCalledWith({
    email: 'test@example.com',
    password: 'password123',
  });
});
