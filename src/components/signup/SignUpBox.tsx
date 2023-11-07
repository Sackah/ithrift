import { useState } from "react";
import NumberForm from "./NumberForm";
import OTPForm from "./OTPForm";

const SignUpBox = () => {
  const [showOTPForm, setShowOTPForm] = useState(false);

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
