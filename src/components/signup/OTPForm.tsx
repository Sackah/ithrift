import { useState } from "react";
import { SignUpFormProps } from "../../types/types";
import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../../state/userSlice";

const OTPForm = (props: SignUpFormProps) => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState<null | any>(null);
  const [isPending, setIsPending] = useState(false);
  const { changeForm } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("otp", otp);

    axios
      .post("https://jsonplaceholder.typicode.com/todos/1", formData)
      .then((response) => {
        console.log(response.data);
        setIsPending(false);
        setError(null);
        dispatch(login(response.data.user));
        changeForm();
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
        setIsPending(false);
        setError("Please try again");
        navigate("/personal"); //REMOVE THIS
      });

    changeForm(); //REMOVE THIS
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
