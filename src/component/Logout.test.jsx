import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Logout from './Logout';

jest.mock('react-router', () => ({
  useNavigate: () => jest.fn(),
}));

describe('Logout component', () => {
  test('renders with correct text and buttons', () => {
    const { getByText } = render(<Logout />);

    expect(getByText('Are You Sure Want To Logout?')).toBeInTheDocument();
    expect(getByText('Yes')).toBeInTheDocument();
    expect(getByText('No')).toBeInTheDocument();
  });

  test('calls navigate with correct path when "Yes" button is clicked', () => {
    const navigate = jest.fn();
    jest.spyOn(require('react-router'), 'useNavigate').mockReturnValue(navigate);

    const { getByText } = render(<Logout />);
    fireEvent.click(getByText('Yes'));
    expect(navigate).toHaveBeenCalledWith('/signin');
  });

  test('calls navigate with correct path when "No" button is clicked', () => {
    const navigate = jest.fn();
    jest.spyOn(require('react-router'), 'useNavigate').mockReturnValue(navigate);
    const { getByText } = render(<Logout />);
    fireEvent.click(getByText('No'));
    expect(navigate).toHaveBeenCalledWith('/profile');
  });
});
