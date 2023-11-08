import { items } from "../../state/userSlice";

type ItemListProps = {
  items: items[];
};

const ItemList = (props: ItemListProps) => {
  return (
    <div className="collection">
      {props.items.map((item) => (
        <div className="item-container" key={item.id} id={item.id}>
          <h5>{item.itemName}</h5>
          <div className="image-container">
            <img src={item.image} alt={item.itemName} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
