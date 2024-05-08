import React from 'react';
import { render } from '@testing-library/react';
import Calendar from './Calendar';

describe('Calendar component', () => {
  test('renders DateCalendarServerRequest component', () => {
    const { getByTestId } = render(<Calendar />);
    
    expect(getByTestId('date-calendar')).toBeInTheDocument();
  });
});
