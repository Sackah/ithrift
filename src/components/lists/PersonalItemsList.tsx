import { item } from "../../state/userSlice";

type ItemListProps = {
  items: item[];
};

const ItemList = (props: ItemListProps) => {
  return (
    <div className="collection">
      {props.items.map((item) => (
        <div className="item-container" key={item.id} id={item.id}>
          <h5>{item.itemName}</h5>
          <div className="image-container">
            <img src={item.images[0]} alt={item.itemName} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
