import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserProfile from './UserProfile';

describe('UserProfile component', () => {
  test('renders user details correctly', () => {
    render(<UserProfile />);

    expect(screen.getByText('Devansh Shukla')).toBeInTheDocument();
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('#123')).toBeInTheDocument();
    expect(screen.getByText('test@gamail.com')).toBeInTheDocument();
    expect(screen.getByText('Noida')).toBeInTheDocument();
    expect(screen.getByText('Rating')).toBeInTheDocument();
  });

  test('opens edit modal when edit button is clicked', () => {
    render(<UserProfile />);
    expect(screen.queryByText('Edit Personal Details')).not.toBeInTheDocument();

    fireEvent.click(screen.getByText('Edit'));
    expect(screen.getByText('Edit Personal Details')).toBeInTheDocument();
  });
});
