import { render, screen } from '@testing-library/react';
import DesktopSignUpNav from '../DesktopSignUpNav';
import NavButtons from "../NavButtons";
import { BrowserRouter } from "react-router-dom";


test('renders the logo', () => {
    const { getByText } = render(
        <BrowserRouter>
            <DesktopSignUpNav />
        </BrowserRouter>
    );
      
    const logo = screen.getByAltText('iThrift-logo');
    expect(logo).toBeInTheDocument();
  });

  test("renders the NavButtons component", () => {
    const { getByText } = render(
      <BrowserRouter>
        <NavButtons />
      </BrowserRouter>
    );
    const signUpButton = getByText("Sign up");
    const signInButton = getByText("Sign in");
    expect(signUpButton).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();
  });
  
