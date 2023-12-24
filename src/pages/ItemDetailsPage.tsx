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
  const { data, isPending, error } = useFetch<item>(`items/${id}`);

  return (
    <>
      <HomePageNav />
      {data && (
        <div className="item-details">
          <div className="item-container">
            <h5>{data.name}</h5>
            <div className="image-container">
              <img src={data.imageUrl} alt={data.name} />
            </div>
            <p>{data.description}</p>
            <p>
              Uploaded by {data.user.name} on {convertToStandardTime(data.createdAt)}
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
