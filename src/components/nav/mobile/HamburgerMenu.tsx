import { HamburgerMenuProps } from "../../../types/types";

/**
 * Hamburger menu icon which toggles a dropdown menu when clicked on, for mobile devices
 * @param {boolean} props.isDropDownActive - whether the dropdown menu is active
 * @param {Function} props.toggleMenu - function to toggle down or up the dropdown menu
 * @returns {JSX.Element}
 */

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
