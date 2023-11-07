import "./styles/SignIn.css";
import logo from "../assets/20231105_165612.png";
import { useState } from "react";

const SignInPage = () => {
  const [credentials, setCredentials] = useState({
    number: "",
    password: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
          <button>Log in</button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
