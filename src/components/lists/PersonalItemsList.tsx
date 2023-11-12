import { item } from "../../state/userSlice";
import Error from "../partials/Error";
import { BASE_URL } from "../../config";
import { convertToStandardTime } from "../../helperFunctions/helperFunctions";

type ItemListProps = {
  items: item[];
  refetch: (newUrl: string) => void;
};

const ItemList = (props: ItemListProps) => {
  const handleDelete = (id: string) => {
    const accessToken = localStorage.getItem("ACCESS_TOKEN_KEY");

    fetch(`${BASE_URL}items/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        props.refetch("users/items");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (props.items.length > 0) {
    return (
      <div className="collection">
        {props.items.map((item) => (
          <div className="item-container" key={item.id} id={item.id}>
            <h5>{item.name}</h5>
            <div className="image-container">
              <img src={item.imageUrl} alt={item.name} />
            </div>
            <p>Uploaded on {convertToStandardTime(item.createdAt)}</p>
            <button onClick={() => handleDelete(item.id)}>Delete Item</button>
          </div>
        ))}
      </div>
    );
  } else {
    return <Error message="You have no items on iThrift" />;
  }
};

export default ItemList;
