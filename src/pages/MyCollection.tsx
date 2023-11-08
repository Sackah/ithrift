import HomePageNav from "../components/nav/HomePageNav";
import Loading from "../components/partials/Loading";
import Error from "../components/partials/Error";
import useFetch from "../customHooks/useFetch";
import ItemList from "../components/lists/PersonalItemsList";

const MyCollection = () => {
  const { error, isPending, data } = useFetch(
    "https://jsonplaceholder.typicode.com/tod/1"
  );

  return (
    <>
      <HomePageNav />
      {data && <ItemList items={data} />}
      {isPending && <Loading />}
      {error && <Error message={"You have no items on iThrift yet."} />}
    </>
  );
};

export default MyCollection;
