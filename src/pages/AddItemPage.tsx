import { useState } from "react";
import "../pages/styles/AddItem.css";
import axios from "axios";

type Change = React.ChangeEvent<HTMLInputElement>;

const AddItemPage = () => {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [images, setImages] = useState<FileList | null>(null);
  const [price, setPrice] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = (event: Change) => {
    if (event.target.files && event.target.files.length > 3) {
      alert("You can only upload up to 3 images");
    } else {
      setImages(event.target.files);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("itemname", itemName);
    formData.append("itemDescription", itemDescription);
    formData.append("price", price);

    if (images) {
      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }
    }

    axios
      .post("https://jsonplaceholder.typicode.com/tod/1", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="add-item">
      {error && <p className="error">{error}</p>}
      <h5>Upload an item</h5>
      <form onSubmit={handleSubmit}>
        <label htmlFor="itemName">Name:</label>
        <input
          type="text"
          id="itemName"
          onChange={(e: Change) => {
            setItemName(e.target.value);
          }}
          required
          value={itemName}
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          required
          onChange={(e: Change) => {
            setItemDescription(e.target.value);
          }}
          value={itemDescription}
        />
        <label htmlFor="images">Add an image:</label>
        <input
          type="file"
          id="images"
          accept="image/*"
          multiple
          required
          onChange={handleImageChange}
        />
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          placeholder="Free, let's go green!"
          onChange={(e: Change) => {
            setPrice(e.target.value);
          }}
          value={price}
        />
        <button>Send to iThrift</button>
      </form>
    </div>
  );
};

export default AddItemPage;
