import HomePageNav from "../components/nav/HomePageNav";
import "./styles/Personal.css";
import { Link } from "react-router-dom";

const PersonalPage = () => {
  return (
    <div className="personal-page">
      <HomePageNav />
      <h3>Welcome Username</h3>
      <div>
        <p>Browse my items: </p>
        <Link to={"/mycollection"}>
          <button>My Collection</button>
        </Link>
      </div>
      <div>
        <p>Add a new item</p>
        <Link to={"/additem"}>
          <button aria-label="plus">
            <i className="fa-solid fa-plus"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PersonalPage;
