import { Navigate } from "react-router-dom";
import { useAuthProps } from "../../types/types";

const UseAuth = ({ children }: useAuthProps) => {
  return (props: useAuthProps) => {
    const token = localStorage.getItem("token");

    if (!token) {
      <Navigate to="/signin" />;
    }
  };

  return children;
};

export default UseAuth;
