import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Login component', () => {
  test('renders login form fields', () => {
    render(
      <Router>
        <Login />
      </Router>
    );

    expect(screen.getByLabelText('Email address')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  test('handles input changes correctly', () => {
    render(
      <Router>
        <Login />
      </Router>
    );

    fireEvent.change(screen.getByLabelText('Email address'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'password123' },
    });

    expect(screen.getByLabelText('Email address')).toHaveValue('test@example.com');
    expect(screen.getByLabelText('Password')).toHaveValue('password123');
  });

  test('submits login form', async () => {
    render(
      <Router>
        <Login />
      </Router>
    );

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      })
    );

    fireEvent.click(screen.getByText('Login'));

    const profilePage = await screen.findByText('Welcome Back');
    expect(profilePage).toBeInTheDocument();
  });
});
