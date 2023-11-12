import { item } from "../../state/userSlice";
import { Link } from "react-router-dom";
import { convertToStandardTime } from "../../helperFunctions/helperFunctions";

type AllItemsListProps = {
  items: item[];
};

const AllItemsList = (props: AllItemsListProps) => {
  return (
    <div className="all-items">
      {props.items.map((item) => (
        <Link to={`/items/${item.id}`}>
          <div className="item-container" key={item.id}>
            <h5>{item.name}</h5>
            <div className="image-container">
              <img src={item.imageUrl} alt={item.name} />
            </div>
            <p>
              Uploaded by: {item.user.name} on{" "}
              {convertToStandardTime(item.createdAt)}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AllItemsList;
