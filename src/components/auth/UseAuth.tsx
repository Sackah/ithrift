import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthProps } from "../../types/types";

/**
 * User Authentication Service
 * @param param0
 * @returns
 */

const UseAuth = ({ children }: useAuthProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("ACCESS_TOKEN_KEY");

    if (!token) {
      navigate("/signin");
    }
  }, [navigate]);

  const token = localStorage.getItem("ACCESS_TOKEN_KEY");

  return token ? <>{children}</> : null;
};

export default UseAuth;
