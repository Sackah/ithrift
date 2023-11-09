import AllItemsList from "../components/lists/AllItemsList";
import HomePageNav from "../components/nav/HomePageNav";
import Loading from "../components/partials/Loading";
import Error from "../components/partials/Error";
import useFetch from "../customHooks/useFetch";
import "../pages/styles/Home.css";
import { useState } from "react";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const { data, isPending, error, refetch } = useFetch(
    `https://jsonplaceholder.typicode.com/toos?item=${query}` //a wrong end point
  );

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    refetch(`https://jsonplaceholder.typicode.com/toos?item=${query}`);
  };

  return (
    <div className="home-page">
      <HomePageNav />
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {data && <AllItemsList items={data} />}
      {isPending && <Loading />}
      {error && <Error message={error.message} />}
    </div>
  );
};

export default HomePage;
