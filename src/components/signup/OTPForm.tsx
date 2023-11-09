import { useState } from "react";
import { SignUpFormProps } from "../../types/types";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../../state/userSlice";
import { AppDispatch } from "../../state/store";
import { BASE_URL } from "../../config";

const OTPForm = (props: SignUpFormProps) => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState<null | any>(null);
  const [isPending, setIsPending] = useState(false);
  const { changeForm } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch(`${BASE_URL}auth/otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ otp }),
    })
      .then((res) => {
        console.log(res);
        setIsPending(false);
        setError(null);
        changeForm();
      })
      .catch((err) => {
        console.log(err);
        setIsPending(false);
        setError(err.message);
      });

    //changeForm(); //REMOVE THIS
    console.log("rrr");
  };

  const handleOtpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setOtp(value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        <label htmlFor="otp" className="visibly-hidden">
          one time pin
        </label>
        <div className="number-wrapper">
          <input
            type="number"
            id="otp"
            value={otp}
            title="Please enter the one time pin"
            onChange={handleOtpChange}
            placeholder="enter the otp sent to your phone"
            required
          />
        </div>
        {!isPending && <button>Register</button>}
        {isPending && (
          <button>
            Registering... <i className="fa-solid fa-spinner fa-spin"></i>
          </button>
        )}
      </form>
    </>
  );
};

export default OTPForm;
