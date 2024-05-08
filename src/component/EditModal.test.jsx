import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EditModal from './EditModal';

describe('EditModal component', () => {
  test('modal opens when the button is clicked', () => {
    render(<EditModal />);
    
    expect(screen.queryByText(/Text in a modal/i)).not.toBeInTheDocument();
    
    fireEvent.click(screen.getByRole('button', { name: /open modal/i }));
    
    expect(screen.getByText(/Text in a modal/i)).toBeInTheDocument();
  });

  test('modal closes when the close button is clicked', () => {
    render(<EditModal />);
    
    fireEvent.click(screen.getByRole('button', { name: /open modal/i }));
    
    expect(screen.getByText(/Text in a modal/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    
    expect(screen.queryByText(/Text in a modal/i)).not.toBeInTheDocument();
  });

  test('modal closes when clicking outside the modal', () => {
    render(<EditModal />);
    
    fireEvent.click(screen.getByRole('button', { name: /open modal/i }));
    
    expect(screen.getByText(/Text in a modal/i)).toBeInTheDocument();
    
    fireEvent.mouseDown(screen.getByTestId('modalBackdrop'));
    
    expect(screen.queryByText(/Text in a modal/i)).not.toBeInTheDocument();
  });
});
