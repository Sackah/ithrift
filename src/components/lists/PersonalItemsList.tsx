import { item } from "../../state/userSlice";
import Error from "../partials/Error";

type ItemListProps = {
  items: item[];
};

const ItemList = (props: ItemListProps) => {
  if (props.items.length > 0) {
    return (
      <div className="collection">
        {props.items.map((item) => (
          <div className="item-container" key={item.id} id={item.id}>
            <h5>{item.name}</h5>
            <div className="image-container">
              <img src={item.imageUrl} alt={item.name} />
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return <Error message="You have no items on iThrift" />;
  }
};

export default ItemList;
