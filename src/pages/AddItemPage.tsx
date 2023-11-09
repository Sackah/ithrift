import { useState } from "react";
import "../pages/styles/AddItem.css";
import { BASE_URL } from "../config";
import axios from "axios";

type Change = React.ChangeEvent<HTMLInputElement>;

const AddItemPage = () => {
  const [details, setDetails] = useState({
    name: "",
    description: "",
    imageUrl: "",
    price: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = (event: Change) => {
    if (event.target.files) {
      const image = new FormData();
      image.append("file", event.target.files[0]);
      axios
        .post(`${BASE_URL}upload`, image)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
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
      price: event.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch(`${BASE_URL}items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        setError(error);
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
          value={details.price}
        />
        <button>Send to iThrift</button>
      </form>
    </div>
  );
};

export default AddItemPage;
