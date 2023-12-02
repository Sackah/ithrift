import HomePageNav from "../components/nav/HomePageNav";
import Loading from "../components/partials/Loading";
import Error from "../components/partials/Error";
import useFetch from "../customHooks/useFetch";
import PersonalItemsList from "../components/lists/PersonalItemsList";
import "../pages/styles/MyCollection.css";
import { item } from "../types/types";

const MyCollection = () => {
  const { error, isPending, data, refetch } = useFetch<item[]>("users/items");

  return (
    <div className="my-collection-page">
      <HomePageNav />
      {data && <PersonalItemsList items={data} refetch={refetch} />}
      {isPending && <Loading />}
      {error && <Error message={error} />}
    </div>
  );
};

export default MyCollection;
