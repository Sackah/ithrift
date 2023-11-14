import { Link } from "react-router-dom";
import { convertToStandardTime } from "../../utils/convertToStandardTime";
import { AllItemsListProps } from "../../types/types";

/**
 * Strictly displays only all items intended to be shown on the home page
 * @param {Array} props - Array of items to render
 * @returns {JSX.Element}
 */

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
              Uploaded by: {item.user.name}{" "}
              <p className="time-and-date">
                {convertToStandardTime(item.createdAt)}
              </p>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AllItemsList;
