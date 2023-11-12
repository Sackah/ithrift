import { useState } from "react";
import "../pages/styles/AddItem.css";
import { BASE_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router";

type Change = React.ChangeEvent<HTMLInputElement>;

const AddItemPage = () => {
  const [details, setDetails] = useState({
    name: "",
    description: "",
    imageUrl: "",
    price: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (event: Change) => {
    if (event.target.files) {
      setIsButtonDisabled(true);
      const image = new FormData();
      image.append("file", event.target.files[0]);
      axios
        .post(`${BASE_URL}upload`, image)
        .then((res) => {
          setDetails((prev) => ({
            ...prev,
            imageUrl: res.data.fileUrl.split(" ").join("%20"),
          }));
          setIsButtonDisabled(false);
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
          setIsButtonDisabled(false);
        });
    }
  };

  const handleItemChange = (event: Change) => {
    setDetails((prev) => ({
      ...prev,
      name: event.target.value,
    }));
  };

  const handleDescriptionChange = (event: Change) => {
    setDetails((prev) => ({
      ...prev,
      description: event.target.value,
    }));
  };

  const handlePriceChange = (event: Change) => {
    setDetails((prev) => ({
      ...prev,
      price: event.target.value === "" ? "0.00" : event.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const accessToken = localStorage.getItem("ACCESS_TOKEN_KEY");

    if (!details.name.trim()) {
      setError("Item name cannot be empty");
      return;
    } else if (!/^[a-zA-Z\s]*$/.test(details.name)) {
      setError("Item name can oly contain letters and spaces");
    }

    if (!details.description.trim()) {
      setError("Description cannot be empty");
      return;
    } else if (!/^[a-zA-Z\s]*$/.test(details.name)) {
      setError("Description can only contain letters and spaces");
    }

    fetch(`${BASE_URL}items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(details),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        navigate("/home");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="add-item">
      {error && <p className="error">{error}</p>}
      <h5>Upload an item</h5>
      <form onSubmit={handleSubmit}>
        <label htmlFor="itemName">Item Name:</label>
        <input
          type="text"
          id="itemName"
          onChange={handleItemChange}
          required
          value={details.name}
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          required
          onChange={handleDescriptionChange}
          value={details.description}
        />
        <label htmlFor="images">Add an image:</label>
        <input
          type="file"
          name="file"
          id="images"
          accept="image/*"
          required
          onChange={handleImageChange}
        />
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          placeholder="Free, let's go green!"
          onChange={handlePriceChange}
          value={details.price === "0.00" ? "" : details.price}
        />
        <button disabled={isButtonDisabled}>Send to iThrift</button>
      </form>
    </div>
  );
};

export default AddItemPage;
