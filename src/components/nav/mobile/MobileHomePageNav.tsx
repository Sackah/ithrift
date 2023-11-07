import { NavLink } from "react-router-dom";

const MobileHomePageNav = () => {
  return (
    <>
      <nav className="mobile-home-page-nav">
        <div className="personal-wrapper">
          <NavLink to={"/personal"}>
            <i className="fa-solid fa-user-large"></i>
            Personal
          </NavLink>
        </div>
        <div className="home-wrapper">
          <NavLink to={"/home"}>
            <i className="fa-solid fa-igloo"></i>Home
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default MobileHomePageNav;
