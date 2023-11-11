import HomePageNav from "../components/nav/HomePageNav";
import "./styles/Personal.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../state/userSlice";

const PersonalPage = () => {
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("ACCESS_TOKEN_KEY");
    navigate("/");
  };

  return (
    <div className="personal-page">
      <HomePageNav />
      <div className="logout-wrapper" onClick={handleLogout}>
        <i className="fa-solid fa-right-from-bracket"></i>
        Logout
      </div>
      <h3>Welcome {user?.data?.name}</h3>
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
