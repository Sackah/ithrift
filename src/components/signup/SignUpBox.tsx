import { useState } from "react";
import NumberForm from "./NumberForm";
import OTPForm from "./OTPForm";

/**
 * Component that renders the form for signing up.
 * conditionally renders a phone number or otp form based on registration progress
 * @returns {JSX.Element}
 */

const SignUpBox = () => {
  const [showOTPForm, setShowOTPForm] = useState(false);

  /**
   * Toogles between the phone number form and the otp form
   */
  const changeForm = () => {
    setShowOTPForm((prev) => !prev);
  };

  return (
    <>
      {!showOTPForm && <NumberForm changeForm={changeForm} />}
      {showOTPForm && <OTPForm changeForm={changeForm} />}
    </>
  );
};

export default SignUpBox;
