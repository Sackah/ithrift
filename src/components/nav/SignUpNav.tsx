import useCheckMobile from "../../customHooks/useCheckMobile";
import DesktopSignUpNav from "./desktop/DesktopSignUpNav";
import MobileSignUpNav from "./mobile/MobileSignUpNav";

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
