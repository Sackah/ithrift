import { NavLink } from "react-router-dom";
import logo from "../../../assets/20231107_224523.png";

const DesktopHomePageNav = () => {
  return (
    <nav className="desktop-homepage-nav">
      <div className="logo">
        <img src={logo} alt="ithrift logo" />
      </div>
      <div className="nav-links">
        <NavLink to={"/personal"}>Personal</NavLink>
        <NavLink to={"/home"}>Home</NavLink>
      </div>
    </nav>
  );
};

export default DesktopHomePageNav;
