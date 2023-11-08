import { HamburgerMenuProps } from "../../../types/types";

const HamburgerMenu = (props: HamburgerMenuProps) => {
  const { isDropDownActive, toggleMenu } = props;

  return (
    <div
      className={`menu-icon ${isDropDownActive ? "drop-down-active" : ""}`}
      onClick={toggleMenu}
      data-testid="hamburger-menu-button"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};



export default HamburgerMenu;
