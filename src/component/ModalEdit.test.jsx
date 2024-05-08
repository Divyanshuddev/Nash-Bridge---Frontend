import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BasicModal from './BasicModal';

describe('BasicModal component', () => {
  const data = {
    firstName: 'John',
    middleName: 'Doe',
    lastName: 'Smith',
    gender: 'Male',
    dateOfBirth: '1990-01-01',
    phoneNumber: '1234567890',
    employeeId: 'EMP123',
    email: 'john@example.com',
  };

  test('renders modal with correct initial values', () => {
    render(<BasicModal open handleClose={() => {}} data={data} />);
    
    const modalTitle = screen.getByText('Edit Personal Details');
    expect(modalTitle).toBeInTheDocument();
    expect(screen.getByLabelText('First Name')).toHaveValue('John');
    expect(screen.getByLabelText('Middle Name')).toHaveValue('Doe');
    expect(screen.getByLabelText('Last Name')).toHaveValue('Smith');
    expect(screen.getByLabelText('Gender')).toHaveValue('Male');
    expect(screen.getByLabelText('Date Of Birth')).toHaveValue('1990-01-01');
    expect(screen.getByLabelText('Phone Number')).toHaveValue('1234567890');
    expect(screen.getByLabelText('Employee ID')).toHaveValue('EMP123');
    expect(screen.getByLabelText('Email')).toHaveValue('john@example.com');
  });

  test('updates input field values when user interacts with them', () => {
    render(<BasicModal open handleClose={() => {}} data={data} />);

    fireEvent.change(screen.getByLabelText('First Name'), { target: { value: 'Jane' } });
    expect(screen.getByLabelText('First Name')).toHaveValue('Jane');

    fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'Female' } });
    expect(screen.getByLabelText('Gender')).toHaveValue('Female');
  });

  test('invokes onHandleEdit function and closes modal on save button click', () => {
    const handleClose = jest.fn();
    render(<BasicModal open handleClose={handleClose} data={data} />);

    fireEvent.click(screen.getByRole('button', { name: 'Save' }));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
