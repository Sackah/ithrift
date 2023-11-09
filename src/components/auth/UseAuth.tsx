import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthProps } from "../../types/types";

const UseAuth = ({ children }: useAuthProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("ACCESS_TOKEN_KEY");

    if (!token) {
      navigate("/signin");
    }
  }, []);

  return children;
};

export default UseAuth;
