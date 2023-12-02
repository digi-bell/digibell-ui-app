import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('renders homepage when path is /', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/Homepage/i)).toBeInTheDocument();
});

test('renders sign in page when path is /login', () => {
  render(
    <MemoryRouter initialEntries={['/login']}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/Sign In/i)).toBeInTheDocument();
});

test('renders sign up page when path is /signup', () => {
  render(
    <MemoryRouter initialEntries={['/signup']}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();
});

test('renders reset password page when path is /reset', () => {
  render(
    <MemoryRouter initialEntries={['/reset']}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/Reset Password/i)).toBeInTheDocument();
});
