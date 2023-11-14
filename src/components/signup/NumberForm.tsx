import { useState } from "react";
import { SignUpFormProps } from "../../types/types";
import { BASE_URL } from "../../config";
import { signUpSchema } from "../../utils/yup";

/**
 * Sign up form with name, number and password fields
 * @param {Function} props.changeForm - changes the form from the number field to
 * an otp field upon validation
 *
 * @returns {JSX.Element}
 */

const NumberForm = (props: SignUpFormProps) => {
  const [credentials, setCredentials] = useState({
    phone: "",
    name: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<null | any>(null);
  const [isPending, setIsPending] = useState(false);
  const { changeForm } = props;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);

    try {
      await signUpSchema.validate(credentials);
      const res = await fetch(`${BASE_URL}auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (res.ok) {
        setIsPending(false);
        setError(null);
        changeForm();
      } else {
        throw new Error(res.statusText);
      }
    } catch (err: any) {
      setError(err.message);
      setIsPending(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>}
        <label htmlFor="username" className="visibly-hidden">
          Name
        </label>
        <input
          type="text"
          id="username"
          placeholder="what would you like us to call you?"
          name="name"
          value={credentials.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="signup-number" className="visibly-hidden">
          Telephone number
        </label>
        <div className="number-wrapper">
          <div className="country-code">+233: </div>
          <input
            type="number"
            id="signup-number"
            pattern="[0-9]{9}"
            value={credentials.phone}
            title="Please enter a 9-digit number"
            maxLength={9}
            name="phone"
            onChange={handleChange}
            placeholder="enter your phone number"
            required
          />
        </div>
        <label htmlFor="password" className="visibly-hidden">
          password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          value={credentials.password}
          placeholder="create a password"
          required
        />
        <label htmlFor="confirm" className="visibly-hidden">
          confirm password
        </label>
        <input
          type="password"
          id="confirm"
          name="confirmPassword"
          onChange={handleChange}
          value={credentials.confirmPassword}
          placeholder="confirm password"
          required
        />
        {!isPending && <button>Sign Up</button>}
        {isPending && (
          <button>
            Verifying Phone Number
            <i className="fa-solid fa-spinner fa-spin"></i>
          </button>
        )}
      </form>
    </>
  );
};

export default NumberForm;
