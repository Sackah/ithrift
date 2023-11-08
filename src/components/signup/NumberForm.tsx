import { useState } from "react";
import { SignUpFormProps } from "../../types/types";
import axios from "axios";

const NumberForm = (props: SignUpFormProps) => {
  const [credentials, setCredentials] = useState({
    number: "",
    username: "",
    password: "",
    passwordConfirm: "",
  });
  const [error, setError] = useState<null | any>(null);
  const [isPending, setIsPending] = useState(false);
  const { changeForm } = props;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);

    if (credentials.passwordConfirm != credentials.password) {
      setError("Passwords does not match!");
    } else {
      const formData = new FormData();
      formData.append("username", credentials.username);
      formData.append("phone-number", `+233${credentials.number}`);
      formData.append("password", credentials.password);

      axios
        .post("https://jsonplaceholder.typicode.com/todos/1", formData)
        .then((response) => {
          console.log(response.data);
          setIsPending(false);
          setError(null);
          changeForm();
        })
        .catch((error) => {
          console.log(error);
          setIsPending(false);
          setError("Phone number not found");
        });
    }

    changeForm(); // REMOVE THIS
    console.log("nnn");
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value.length <= 9) {
      setCredentials((prevState) => ({
        ...prevState,
        number: value,
      }));
    }
  };

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prevState) => ({
      ...prevState,
      username: event.target.value,
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
      passwordConfirm: event.target.value,
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        <label htmlFor="username" className="visibly-hidden">
          Name
        </label>
        <input
          type="text"
          id="username"
          placeholder="what would you like us to call you?"
          value={credentials.username}
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
            value={credentials.number}
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
        />
        <label htmlFor="confirm" className="visibly-hidden">
          confirm password
        </label>
        <input
          type="password"
          id="confirm"
          onChange={handleConfirmPassWordChange}
          value={credentials.passwordConfirm}
          placeholder="confirm password"
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
