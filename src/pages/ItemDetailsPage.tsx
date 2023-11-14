import { useParams } from "react-router";
import useFetch from "../customHooks/useFetch";
import Loading from "../components/partials/Loading";
import Error from "../components/partials/Error";
import { item } from "../types/types";
import "../pages/styles/ItemDetails.css";
import { convertToStandardTime } from "../utils/convertToStandardTime";
import HomePageNav from "../components/nav/HomePageNav";

/**
 * This page displays the details of a specific item clicked on from the home page
 * @returns {JSX.Element}
 */

const ItemDetailsPage = () => {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(`items/${id}`);

  const itemData = data as item;

  return (
    <>
      <HomePageNav />
      {itemData && (
        <div className="item-details">
          <div className="item-container">
            <h5>{itemData.name}</h5>
            <div className="image-container">
              <img src={itemData.imageUrl} alt={itemData.name} />
            </div>
            <p>{itemData.description}</p>
            <p>
              Uploaded by {itemData.user.name} on{" "}
              {convertToStandardTime(itemData.createdAt)}
            </p>
          </div>
        </div>
      )}
      {isPending && <Loading />}
      {error && <Error message={error} />}
    </>
  );
};

export default ItemDetailsPage;
