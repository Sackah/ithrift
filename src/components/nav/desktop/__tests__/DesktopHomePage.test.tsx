import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import DesktopHomePageNav from "../DesktopHomePageNav";
import { BrowserRouter } from "react-router-dom";

test("renders the NavButtons component", () => {
  const { getByText } = render(
    <BrowserRouter>
      <DesktopHomePageNav />
    </BrowserRouter>
  );
  const signUpButton = getByText("Personal");
  const signInButton = getByText("Home");
  expect(signUpButton).toBeInTheDocument();
  expect(signInButton).toBeInTheDocument();
});
