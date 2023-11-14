import { useState } from "react";
import { SignUpFormProps } from "../../types/types";
import { BASE_URL } from "../../config";

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);

    if (!credentials.name.trim()) {
      setError("Name cannot be empty");
      setIsPending(false);
      return;
    }

    if (!/^[a-zA-Z\s]*$/.test(credentials.name)) {
      setError("Name can only contain letters and spaces");
      setIsPending(false);
      return;
    }

    if (credentials.confirmPassword !== credentials.password) {
      setError("Passwords do not match!");
      setIsPending(false);
      return;
    }

    if (credentials.phone.length !== 9) {
      setError("Number should be 9 digits");
      setIsPending(false);
      return;
    }

    fetch(`${BASE_URL}auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    })
      .then((res) => {
        if (res.ok) {
          setIsPending(false);
          setError(null);
          changeForm();
        } else {
          throw new Error(res.statusText);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsPending(false);
        setError(err.message);
      });

    console.log("Sign up!");
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value.length <= 9) {
      setCredentials((prevState) => ({
        ...prevState,
        phone: value,
      }));
    }
  };

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prevState) => ({
      ...prevState,
      password: event.target.value,
    }));
  };

  const handleConfirmPassWordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCredentials((prevState) => ({
      ...prevState,
      confirmPassword: event.target.value,
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
          value={credentials.name}
          onChange={handleUserNameChange}
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
            onChange={handleNumberChange}
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
          onChange={handlePasswordChange}
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
          onChange={handleConfirmPassWordChange}
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
