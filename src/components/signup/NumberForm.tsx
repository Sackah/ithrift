import { useState } from "react";
import { SignUpFormProps } from "../../types/types";
import axios from "axios";

const NumberForm = (props: SignUpFormProps) => {
  const [number, setNumber] = useState("");
  const [error, setError] = useState<null | any>(null);
  const [isPending, setIsPending] = useState(false);
  const { changeForm } = props;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);

    const formData = new FormData();
    formData.append("phone-number", number);

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

    changeForm(); //Remove this
    console.log("nnn");
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value.length <= 9) {
      setNumber(value);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        <label htmlFor="signup-number" className="visibly-hidden">
          Telephone number
        </label>
        <div className="number-wrapper">
          <div className="country-code">+233: </div>
          <input
            type="number"
            id="signup-number"
            pattern="[0-9]{9}"
            value={number}
            title="Please enter a 9-digit number"
            maxLength={9}
            onChange={handleNumberChange}
            placeholder="enter your phone number"
            required
          />
        </div>
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
