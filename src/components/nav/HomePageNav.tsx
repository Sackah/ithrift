import useCheckMobile from "../../customHooks/useCheckMobile";
import DesktopHomePageNav from "./desktop/DesktopHomePageNav";
import MobileHomePageNav from "./mobile/MobileHomePageNav";

/**
 * Navigation bar strictly for the home page when the user is logged in
 * @returns {JSX.Element} - either a mobile or desktop navigation bar relative to display size
 */

const HomePageNav = () => {
  const isMobile = useCheckMobile();

  return (
    <>
      {isMobile && <MobileHomePageNav />}
      {!isMobile && <DesktopHomePageNav />}
    </>
  );
};

export default HomePageNav;
