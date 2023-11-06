import { HamburgerMenuProps } from "../../../types/types";

const HamburgerMenu = (props: HamburgerMenuProps) => {
  const { isDropDownActive, toggleMenu } = props;

  return (
    <div
      className={`menu-icon ${isDropDownActive ? "drop-down-active" : ""}`}
      onClick={toggleMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default HamburgerMenu;
