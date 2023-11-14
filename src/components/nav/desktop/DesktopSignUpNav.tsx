import logo from "../../../assets/20231105_165612.png";
import NavButtons from "./NavButtons";
import { Link } from "react-router-dom";

/**
 * Navigation bar for desktop devices on the signup page
 * @returns {JSX.Element}
 */

const DesktopSignUpNav = () => {
  return (
    <nav className="desktop-nav-primary">
      <div>
        <div className="logo-wrapper">
          <Link to={"/"}>
            <div className="nav-logo">
              <img src={logo} alt="iThrift-logo" />
              <p>iThrift</p>
            </div>
          </Link>
        </div>
        <NavButtons />
      </div>
    </nav>
  );
};

export default DesktopSignUpNav;
