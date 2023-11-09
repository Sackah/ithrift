import React from 'react';
import { render, fireEvent, RenderResult, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MobileSignUpNav from '../MobileSignUpNav';

describe('MobileSignUpNav Component', () => {
  test('renders MobileSignUpNav component', () => {
    render(
      <BrowserRouter>
        <MobileSignUpNav />
      </BrowserRouter>
    );
    
    const logoImage = screen.getByAltText('iThrift-logo');
    expect(logoImage).toBeInTheDocument(); // Assert that the logo image is rendered

    const iThriftText = screen.getByText('iThrift');
    expect(iThriftText).toBeInTheDocument(); // Assert that the 'iThrift' text is rendered
  });

  test('toggles dropdown on clicking hamburger menu', () => {
    render(
      <BrowserRouter>
        <MobileSignUpNav />
      </BrowserRouter>
    );

    const menuButton = screen.getByTestId("hamburger-menu-button");
    fireEvent.click(menuButton); // Simulate a click event on the hamburger menu

    const signUpLink = screen.getByText('Sign up');
    expect(signUpLink).toBeInTheDocument(); // Assert that the 'Sign up' link is visible after the menu click

    const logInLink = screen.getByText('Log in');
    expect(logInLink).toBeInTheDocument(); // Assert that the 'Log in' link is visible after the menu click
  });
});
