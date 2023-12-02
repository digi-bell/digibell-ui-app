import { render, screen, fireEvent } from '@testing-library/react';
import SignIn from '../SignIn';

test('renders sign in form', () => {
  render(<SignIn />);
  
  // Check if the sign in form elements are rendered
  expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
});

test('submits form with correct data', () => {
  render(<SignIn />);
  
  // Fill in the form fields
  fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });
  
  // Submit the form
  fireEvent.click(screen.getByRole('button', { name: /sign in/i }));
  
  // Check if the form data is logged correctly
  expect(console.log).toHaveBeenCalledWith({
    email: 'test@example.com',
    password: 'password123',
  });
});
