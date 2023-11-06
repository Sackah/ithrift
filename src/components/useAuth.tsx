import { Navigate } from "react-router-dom";

type useAuthProps = {
  children: React.Component;
};

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
