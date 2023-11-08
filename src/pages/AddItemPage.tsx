import { useState } from "react";
import "../pages/styles/AddItem.css";

type Change = React.ChangeEvent<HTMLInputElement>;

const AddItemPage = () => {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [images, setImages] = useState<FileList | null>(null);
  const [isFree, setIsFree] = useState(true);
  const [price, setPrice] = useState("");

  const handleImageChange = (event: Change) => {
    setImages(event.target.files);
  };

  const handleRadioChange = (event: Change) => {
    setIsFree(event.target.value === "free");
  };

  const handlePriceChange = (event: Change) => {
    setPrice(event.target.value);
  };

  return (
    <div className="add-item">
      <h5>Upload an item</h5>
      <form className="add-item">
        <label htmlFor="itemName">Item Name:</label>
        <input
          type="text"
          id="itemName"
          onChange={(e: Change) => {
            setItemName(e.target.value);
          }}
          required
          value={itemName}
        />
        <label htmlFor="description">Item Description:</label>
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
          onChange={handleImageChange}
          value=""
        />
        <label htmlFor="free">Free</label>
        <input
          type="radio"
          id="free"
          name="price"
          value="free"
          checked={isFree}
          onChange={handleRadioChange}
        />
        {!isFree && (
          <>
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              required
              onChange={handlePriceChange}
              value={price}
            />
          </>
        )}
        <button>Send to iThrift</button>
      </form>
    </div>
  );
};

export default AddItemPage;
