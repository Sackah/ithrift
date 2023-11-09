import HomePageNav from "../components/nav/HomePageNav";
import Loading from "../components/partials/Loading";
import Error from "../components/partials/Error";
import useFetch from "../customHooks/useFetch";
import ItemList from "../components/lists/PersonalItemsList";
import "../pages/styles/MyCollection.css";

const MyCollection = () => {
  const { error, isPending, data } = useFetch("users/items");

  return (
    <>
      <HomePageNav />
      {data && <ItemList items={data} />}
      {isPending && <Loading />}
      {error && <Error message={error} />}
    </>
  );
};

export default MyCollection;
