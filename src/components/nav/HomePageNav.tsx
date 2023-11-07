import useCheckMobile from "../../customHooks/useCheckMobile";
import DesktopHomePageNav from "./desktop/DesktopHomePageNav";
import MobileHomePageNav from "./mobile/MobileHomePageNav";

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
