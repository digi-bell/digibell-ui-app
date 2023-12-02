import { render, screen, fireEvent } from '@testing-library/react';
import ResetPassword from '../Reset';

test('renders reset password form', () => {
  render(<ResetPassword />);
  
  // Check if the form elements are rendered
  expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Reset Password/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Know your password?/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Don't have an account? Sign Up/i })).toBeInTheDocument();
});

test('submits form with correct data', () => {
  render(<ResetPassword />);
  
  // Fill in the form fields
  fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'test@example.com' } });
  
  // Submit the form
  fireEvent.click(screen.getByRole('button', { name: /Reset Password/i }));
  
  // Check if the form data is logged correctly
  expect(console.log).toHaveBeenCalledWith({
    email: 'test@example.com',
    password: null, // Assuming there is no password field in the form
  });
});
