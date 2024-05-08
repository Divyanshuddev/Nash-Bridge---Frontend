import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home component', () => {
  test('renders home page with correct content', () => {
    render(<Home />);

    const startSideHustleText = screen.getByText('Start your side hustle today');
    expect(startSideHustleText).toBeInTheDocument();

    const competencyListHeading = screen.getByText('List of Competency');
    expect(competencyListHeading).toBeInTheDocument();

    const skillsListHeading = screen.getByText('List of Skills');
    expect(skillsListHeading).toBeInTheDocument();

    const offerOneToOneSessionsCard = screen.getByText('Offer 1:1 Sessions');
    expect(offerOneToOneSessionsCard).toBeInTheDocument();

    const hostAWebinarCard = screen.getByText('Host a Webinar');
    expect(hostAWebinarCard).toBeInTheDocument();

    const requestYourPerfectSessionNowCard = screen.getByText('Request Your Perfect Session Now!!');
    expect(requestYourPerfectSessionNowCard).toBeInTheDocument();
  });

});
