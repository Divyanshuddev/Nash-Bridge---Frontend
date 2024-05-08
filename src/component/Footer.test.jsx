import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
  test('renders logo and company name correctly', () => {
    render(<Footer />);
    const logo = screen.getByAltText('Logo');
    expect(logo).toBeInTheDocument();
    const companyName = screen.getByText('NashBridge');
    expect(companyName).toBeInTheDocument();
  });

  test('renders footer links with correct text and href', () => {
    render(<Footer />);
    const aboutLink = screen.getByText('About');
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute('href', '#about');
    const contactLink = screen.getByText('Contact Us');
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute('href', '#contact');
    const pricingLink = screen.getByText('Pricing');
    expect(pricingLink).toBeInTheDocument();
    expect(pricingLink).toHaveAttribute('href', '#pricing');
    const blogLink = screen.getByText('Blog');
    expect(blogLink).toBeInTheDocument();
    expect(blogLink).toHaveAttribute('href', '#blog');
    const thinkingLink = screen.getByText('Our thinking');
    expect(thinkingLink).toBeInTheDocument();
    expect(thinkingLink).toHaveAttribute('href', '#thinking');
  });

  test('renders address and copyright text correctly', () => {
    render(<Footer />);
    const address = screen.getByText('S-L11 Block, Noida, UP, India');
    expect(address).toBeInTheDocument();
    const copyright = screen.getByText('©2024 NashBridge');
    expect(copyright).toBeInTheDocument();
  });
});
