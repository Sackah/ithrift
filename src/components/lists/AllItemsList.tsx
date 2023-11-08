import { useSelector } from "react-redux";
import { item } from "../../state/userSlice";
import { RootState } from "../../state/store";
import { Link } from "react-router-dom";

type AllItemsListProps = {
  items: item[];
};

const AllItemsList = (props: AllItemsListProps) => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div className="all-items">
      {props.items.map((item) => (
        <Link to={`/items/${item.id}`}>
          <div className="item-container" key={item.id}>
            <h5>{item.itemName}</h5>
            <div className="image-container">
              <img src={item.images[0]} alt={item.itemName} />
            </div>
            <p>Uploaded by: {user.username}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AllItemsList;
