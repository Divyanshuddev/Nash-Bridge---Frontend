import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DateCalendarServerRequest from './DateCalendarServerRequest';

jest.mock('./DateCalendarServerRequest', () => ({
  ...jest.requireActual('./DateCalendarServerRequest'),
  fakeFetch: jest.fn(),
}));

describe('DateCalendarServerRequest component', () => {
  test('renders without crashing', () => {
    render(<DateCalendarServerRequest />);
    
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays loading state correctly', async () => {
    render(<DateCalendarServerRequest />);
    
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });
  });

  test('fetches highlighted days and updates the state accordingly', async () => {
    const mockedFetch = jest.fn().mockResolvedValue({ daysToHighlight: [1, 2, 3] });
    DateCalendarServerRequest.fakeFetch = mockedFetch;

    render(<DateCalendarServerRequest />);
    
    await waitFor(() => {
      expect(screen.getByText(/🌚/i)).toBeInTheDocument();
    });
  });

  test('handles aborting of requests correctly', async () => {
    const mockedFetch = jest.fn().mockImplementation(() => new Promise(() => {}));
    DateCalendarServerRequest.fakeFetch = mockedFetch;

    render(<DateCalendarServerRequest />);
    
    userEvent.click(screen.getByRole('button', { name: /next month/i }));

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(mockedFetch).toHaveBeenCalled();
    });

    render(null);
    
    expect(mockedFetch.mock.results[0].value).toThrow('aborted');
  });
});
