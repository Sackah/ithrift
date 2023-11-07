import "./styles/SignIn.css";
import logo from "../assets/20231105_165612.png";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SignInPage = () => {
  const [credentials, setCredentials] = useState({
    number: "",
    password: "",
  });
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoggingIn(true);

    const formData = new FormData();
    formData.append("phone-number", credentials.number);
    formData.append("password", credentials.password);

    axios
      .post("https://jsonplaceholder.typicode.com/todos/1", formData)
      .then((response) => {
        console.log(response.data);
        setIsLoggingIn(false);
        setError(null);
      })
      .catch((error) => {
        console.log(error);
        setIsLoggingIn(false);
        setError("Credentials may be incorrect!");
      });

    console.log("Submit!");
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

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setCredentials((prevState) => ({
      ...prevState,
      password: value,
    }));
  };

  return (
    <div className="sign-in">
      <div className="sign-in-box">
        <img src={logo} alt="iThrift logo" />
        <h2>Login to iThrift</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="phone-number">Telephone number</label>
          <div className="number-wrapper">
            <div className="country-code">+233</div>
            <input
              type="number"
              id="phone-number"
              pattern="[0-9]{9}"
              value={credentials.number}
              title="Please enter a 9-digit number"
              maxLength={9}
              onChange={handleNumberChange}
              required
            />
          </div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={handlePasswordChange}
            required
          />
          {!isLoggingIn && <button>Log in</button>}
          {isLoggingIn && <button>Loging in...</button>}
        </form>
        <p>
          New User? <Link to={"/"}>Sign Up</Link>
        </p>
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default SignInPage;
