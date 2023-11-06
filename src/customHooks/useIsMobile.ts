import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { checkIsMobile } from "../state/displaySlice";

const useCheckMobile = () => {
  const dispatch = useDispatch();
  const isMobile = useSelector((state: RootState) => state.display.isMobile);

  useEffect(() => {
    const handleResize = () => {
      dispatch(checkIsMobile());
    };

    //dispatch action on mount
    dispatch(checkIsMobile());

    window.addEventListener("resize", handleResize);

    //cleanup the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  return isMobile;
};

export default useCheckMobile;
