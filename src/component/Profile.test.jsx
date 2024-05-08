import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Profile from './Profile';

describe('Profile component', () => {
  test('renders tabs with correct icons and labels', () => {
    render(<Profile />);
    
    expect(screen.getByRole('tab', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /bookings/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /calendar/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /profile/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /rewards/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /activity/i })).toBeInTheDocument();

    expect(screen.getByRole('img', { name: /home icon/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /bookings icon/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /calendar icon/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /profile icon/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /rewards icon/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /activity icon/i })).toBeInTheDocument();
  });

  test('switches tab content correctly', () => {
    render(<Profile />);

    expect(screen.getByText(/home tab content/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('tab', { name: /calendar/i }));
    expect(screen.getByText(/calendar tab content/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('tab', { name: /profile/i }));
    expect(screen.getByText(/user profile content/i)).toBeInTheDocument();
  });

});
