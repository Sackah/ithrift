import { Link } from "react-router-dom";

const NavButtons = () => {
  return (
    <div className="nav-buttons">
      <Link to={"#sign-up"}>
        <button className="btn submit-btn">Sign up</button>
      </Link>
      <Link to={"/signin"}>
        <button className="btn sign-in-btn">Sign in</button>
      </Link>
    </div>
  );
};

export default NavButtons;
