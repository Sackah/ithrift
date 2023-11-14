import "./styles/SignIn.css";
import logo from "../assets/20231105_165612.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../state/userSlice";
import { AppDispatch } from "../state/store";
import { BASE_URL } from "../config";

const SignInPage = () => {
  const [credentials, setCredentials] = useState({
    phone: "",
    password: "",
  });
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoggingIn(true);

    try {
      const res = await fetch(`${BASE_URL}auth/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const data = await res.json();

      if (data.accessToken) {
        localStorage.setItem("ACCESS_TOKEN_KEY", data.accessToken);
        await dispatch(login(data.accessToken));
        navigate("/personal");
      } else {
        setError(data.message);
      }

      setIsLoggingIn(false);
    } catch (err: any) {
      console.log(err);
      setIsLoggingIn(false);
      setError(err.message);
    }

    console.log("Submit!");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
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
              value={credentials.phone}
              title="Please enter a 9-digit number"
              maxLength={9}
              name="phone"
              onChange={handleChange}
              required
            />
          </div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            required
          />
          {!isLoggingIn && <button>Log in</button>}
          {isLoggingIn && <button>Loging in...</button>}
        </form>
        <p>
          New User? <Link to={"/"}>Sign Up</Link>
        </p>
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default SignInPage;
