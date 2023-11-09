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
            <h5>{item.name}</h5>
            <div className="image-container">
              <img src={item.imageUrl} alt={item.name} />
            </div>
            <p>Uploaded by: {user?.data?.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AllItemsList;
