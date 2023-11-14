import "../Nav1.css";
import logo from "../../../assets/20231105_165612.png";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Navigation bar for mobile devices on the signup page
 * @returns {JSX.Element}
 */

const MobileSignUpNav = () => {
  const [isDropDownActive, setIsDropDownActive] = useState(false);

  const toggleMenu = () => {
    setIsDropDownActive((prev) => !prev);
  };

  return (
    <>
      <nav className="mobile-nav-primary">
        <div>
          <div className="logo-wrapper">
            <Link to={"/"}>
              <div className="nav-logo">
                <img src={logo} alt="iThrift-logo" />
                <p>iThrift</p>
              </div>
            </Link>
          </div>
          <HamburgerMenu
            isDropDownActive={isDropDownActive}
            toggleMenu={toggleMenu}
          />
        </div>
      </nav>
      <div
        className={`extended-menu ${
          isDropDownActive ? "drop-down-active" : ""
        }`}
      >
        <a href="#sign-up">Sign up</a>
        <Link to={"/signin"}>Log in</Link>
      </div>
    </>
  );
};

export default MobileSignUpNav;
