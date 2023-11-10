import AllItemsList from "../components/lists/AllItemsList";
import HomePageNav from "../components/nav/HomePageNav";
import Loading from "../components/partials/Loading";
import Error from "../components/partials/Error";
import useFetch from "../customHooks/useFetch";
import "../pages/styles/Home.css";
import { useState } from "react";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const { data, isPending, error, refetch } = useFetch(`items?search=${query}`);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    refetch(`items?search=${query}`);
  };

  return (
    <div className="home-page">
      <HomePageNav />
      <form onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Search by name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button aria-label="search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      {data && <AllItemsList items={data} />}
      {isPending && <Loading />}
      {error && <Error message={error} />}
    </div>
  );
};

export default HomePage;
