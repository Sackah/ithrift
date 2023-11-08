import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import NavButtons from "../NavButtons";
import { BrowserRouter } from "react-router-dom";

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
