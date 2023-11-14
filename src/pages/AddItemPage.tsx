import { useState } from "react";
import "../pages/styles/AddItem.css";
import { BASE_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router";
import { addItemSchema } from "../utils/yup";

/**
 * Page for uploading new items unto the website
 * @returns {JSX.Element}
 */

const AddItemPage = () => {
  const [details, setDetails] = useState({
    name: "",
    description: "",
    imageUrl: "",
    price: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const navigate = useNavigate();

  /**
   * Attached images are uploaded unto a third party service, the response from this api
   * is an image url which is parsed as part of the item properties upon submission
   * @param event image attachment
   */
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Function that checks if there is an input value, else defaults to 0
   * @param event
   */
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDetails((prev) => ({
      ...prev,
      price: event.target.value === "" ? "0.00" : event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);
    const { name, description } = details;
    const accessToken = localStorage.getItem("ACCESS_TOKEN_KEY");

    try {
      await addItemSchema.validate({ name, description });
      const res = await fetch(`${BASE_URL}items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(details),
      });

      if (res.ok) {
        setIsPending(false);
        navigate("/home");
      } else {
        throw new Error(res.statusText);
      }
    } catch (error: any) {
      setError(error.message);
      setIsPending(false);
      setIsButtonDisabled(false);
    }
  };

  return (
    <div className="add-item">
      {error && <p className="error-message">{error}</p>}
      <h5>Upload an item</h5>
      <form onSubmit={handleSubmit}>
        <label htmlFor="itemName">Item Name:</label>
        <input
          type="text"
          id="itemName"
          name="name"
          onChange={handleChange}
          required
          value={details.name}
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          required
          name="description"
          onChange={handleChange}
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
        {!isPending && (
          <button disabled={isButtonDisabled}>Send to iThrift</button>
        )}
        {isPending && <button disabled>Sending to iThrift...</button>}
      </form>
    </div>
  );
};

export default AddItemPage;
