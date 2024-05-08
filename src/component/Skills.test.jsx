import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ChipsArray from './ChipsArray';

describe('ChipsArray component', () => {
  test('renders chips correctly', () => {
    render(<ChipsArray />);

    expect(screen.getAllByRole('button')).toHaveLength(16);
    expect(screen.getByText('Angular')).toBeInTheDocument();
    expect(screen.getByText('jQuery')).toBeInTheDocument();
    expect(screen.getByText('Polymer')).toBeInTheDocument();
    expect(screen.getByText('Vue.js')).toBeInTheDocument();
    expect(screen.getByText('React.js')).toBeInTheDocument();
    expect(screen.getByText('Next.js')).toBeInTheDocument();
  });

  test('deletes chip when delete button is clicked', () => {
    render(<ChipsArray />);

    fireEvent.click(screen.getByLabelText('delete Angular'));
    expect(screen.queryByText('Angular')).not.toBeInTheDocument();
  });

  test('does not delete chip when delete button is clicked on "React" chip', () => {
    render(<ChipsArray />);
    fireEvent.click(screen.getByLabelText('delete React.js'));
    expect(screen.getByText('React.js')).toBeInTheDocument();
  });
});
