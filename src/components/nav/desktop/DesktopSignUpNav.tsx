import logo from "../../../assets/20231105_165612.png";
import NavButtons from "./NavButtons";

const DesktopSignUpNav = () => {
  return (
    <nav className="desktop-nav-primary">
      <div>
        <div className="logo-wrapper">
          <div className="nav-logo">
            <img src={logo} alt="iThrift-logo" />
            <p>iThrift</p>
          </div>
        </div>
        <NavButtons />
      </div>
    </nav>
  );
};

export default DesktopSignUpNav;
