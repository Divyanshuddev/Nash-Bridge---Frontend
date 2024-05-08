import React from 'react';
import { render } from '@testing-library/react';
import MediaCard from './MediaCard';

describe('MediaCard component', () => {
  test('renders media card with image and heading correctly', () => {
    const heading = 'Example Heading';
    const image = 'example.jpg';
    const { getByText, getByAltText } = render(<MediaCard heading={heading} image={image} />);

    expect(getByText(heading)).toBeInTheDocument();
    
    expect(getByAltText('nash bridge')).toBeInTheDocument();
    expect(getByAltText('nash bridge')).toHaveAttribute('src', image);
  });

  test('renders description if provided', () => {
    const heading = 'Example Heading';
    const description = 'Example Description';
    const { getByText } = render(<MediaCard heading={heading} description={description} />);
    
    expect(getByText(description)).toBeInTheDocument();
  });
});
