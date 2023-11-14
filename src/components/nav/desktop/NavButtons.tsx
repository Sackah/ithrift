import { Link } from "react-router-dom";

/**
 * Buttons on the nav bar of the signup page for desktop display
 * @returns {JSX.Element} - two buttons for signing in and signing up
 */

const NavButtons = () => {
  return (
    <div className="nav-buttons">
      <a href={"#sign-up"}>
        <button className="btn sign-up-btn">Sign up</button>
      </a>
      <Link to={"/signin"}>
        <button className="btn sign-in-btn">Sign in</button>
      </Link>
    </div>
  );
};

export default NavButtons;
