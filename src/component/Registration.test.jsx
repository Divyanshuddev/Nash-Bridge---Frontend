import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Registration from './Registration';

describe('Registration component', () => {
  test('renders form fields correctly', () => {
    render(<Registration />);

    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/middle name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/gender/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date of birth/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone no/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/employee id/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/skills/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  test('updates form data on input change', () => {
    render(<Registration />);

    userEvent.type(screen.getByLabelText(/first name/i), 'John');
    userEvent.type(screen.getByLabelText(/middle name/i), 'Doe');
    userEvent.type(screen.getByLabelText(/last name/i), 'Smith');
    fireEvent.change(screen.getByLabelText(/gender/i), { target: { value: 'Male' } });
    userEvent.type(screen.getByLabelText(/phone no/i), '1234567890');
    userEvent.type(screen.getByLabelText(/employee id/i), 'EMP123');
    userEvent.type(screen.getByLabelText(/skills/i), 'React, Node.js');
    userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
    userEvent.type(screen.getByLabelText(/password/i), 'password123');

    expect(screen.getByLabelText(/first name/i)).toHaveValue('John');
    expect(screen.getByLabelText(/middle name/i)).toHaveValue('Doe');
    expect(screen.getByLabelText(/last name/i)).toHaveValue('Smith');
    expect(screen.getByLabelText(/gender/i)).toHaveValue('Male');
    expect(screen.getByLabelText(/phone no/i)).toHaveValue('1234567890');
    expect(screen.getByLabelText(/employee id/i)).toHaveValue('EMP123');
    expect(screen.getByLabelText(/skills/i)).toHaveValue('React, Node.js');
    expect(screen.getByLabelText(/email/i)).toHaveValue('john@example.com');
    expect(screen.getByLabelText(/password/i)).toHaveValue('password123');
  });

  test('submits form data on button click', () => {
    render(<Registration />);

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ success: true }),
      })
    );

    userEvent.type(screen.getByLabelText(/first name/i), 'John');
    userEvent.type(screen.getByLabelText(/last name/i), 'Doe');
    fireEvent.change(screen.getByLabelText(/gender/i), { target: { value: 'Male' } });
    userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
    userEvent.type(screen.getByLabelText(/password/i), 'password123');

    fireEvent.click(screen.getByText(/submit/i));

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('http://localhost:3000/practice', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: 'John',
        middleName: '',
        lastName: 'Doe',
        gender: 'Male',
        dob: '2024-05-07T05:43:17.976Z',
        phoneNumber: '',
        employeeId: '',
        skills: '',
        email: 'john@example.com',
        password: 'password123',
      }),
      redirect: 'follow',
    });
  });
});
