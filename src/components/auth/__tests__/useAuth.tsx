import { Navigate } from "react-router-dom";
import { useAuthProps } from "../../../types/types";

const useAuth = ({ children }: useAuthProps) => {
  return (props: useAuthProps) => {
    const token = localStorage.getItem("token");

    if (!token) {
      <Navigate to="/signin" />;
    }
  };

  return children;
};

export default useAuth;
