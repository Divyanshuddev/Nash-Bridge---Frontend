import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header component', () => {
  test('renders header with correct title and navigation links', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const title = screen.getByText('Nash Bridge');
    expect(title).toBeInTheDocument();

    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.closest('a')).toHaveAttribute('href', '/');

    const signInLink = screen.getByText('SignIn');
    expect(signInLink).toBeInTheDocument();
    expect(signInLink.closest('a')).toHaveAttribute('href', '/signin');

    const signUpLink = screen.getByText('SignUp');
    expect(signUpLink).toBeInTheDocument();
    expect(signUpLink.closest('a')).toHaveAttribute('href', '/signup');

    const userLink = screen.getByText('Hi, User');
    expect(userLink).toBeInTheDocument();
    expect(userLink.closest('a')).toHaveAttribute('href', '/profile');
  });

  test('navigates to correct routes when links are clicked', () => {
    const navigate = jest.fn();

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('Home'));
    expect(navigate).toHaveBeenCalledWith('/');

    fireEvent.click(screen.getByText('SignIn'));
    expect(navigate).toHaveBeenCalledWith('/signin');

    fireEvent.click(screen.getByText('SignUp'));
    expect(navigate).toHaveBeenCalledWith('/signup');

    fireEvent.click(screen.getByText('Hi, User'));
    expect(navigate).toHaveBeenCalledWith('/profile');
  });
});
