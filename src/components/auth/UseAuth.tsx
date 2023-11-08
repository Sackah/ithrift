import { useNavigate } from "react-router-dom";
import { useAuthProps } from "../../types/types";

const UseAuth = ({ children }: useAuthProps) => {
  const navigate = useNavigate();
  return (props: useAuthProps) => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/signin");
    }
  };

  return children;
};

export default UseAuth;
