import AllItemsList from "../components/lists/AllItemsList";
import HomePageNav from "../components/nav/HomePageNav";
import Loading from "../components/partials/Loading";
import Error from "../components/partials/Error";
import useFetch from "../customHooks/useFetch";
import "../pages/styles/Home.css";

const HomePage = () => {
  const { data, isPending, error } = useFetch(
    "https://jsonplaceholder.typicode.com/tod/1" //a wrong end point
  );
  return (
    <>
      <HomePageNav />
      {data && <AllItemsList items={data} />}
      {isPending && <Loading />}
      {error && <Error message={error.message} />}
    </>
  );
};

export default HomePage;
