import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import MobileHomePageNav from "../MobileHomePageNav";
import { BrowserRouter } from "react-router-dom";

test("renders the NavButtons component", () => {
  const { getByText } = render(
    <BrowserRouter>
      <MobileHomePageNav/>
    </BrowserRouter>
  );
  const signUpButton = getByText("Personal");
  const signInButton = getByText("Home");
  expect(signUpButton).toBeInTheDocument();
  expect(signInButton).toBeInTheDocument();
});
