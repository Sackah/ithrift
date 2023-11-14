import useCheckMobile from "../../customHooks/useCheckMobile";
import DesktopSignUpNav from "./desktop/DesktopSignUpNav";
import MobileSignUpNav from "./mobile/MobileSignUpNav";

/**
 * Navigation bar strictly for the signup page when a user is not logged in
 * @returns {JSX.Element} - either a mobile or desktop navigation bar relative to display size
 */

const SignUpNav = () => {
  const isMobile = useCheckMobile();

  return (
    <>
      {isMobile && <MobileSignUpNav />}
      {!isMobile && <DesktopSignUpNav />}
    </>
  );
};

export default SignUpNav;
