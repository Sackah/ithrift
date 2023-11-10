import { Link } from "react-router-dom";
import "../pages/styles/NotFound.css";
import Footer from "../components/signup/Footer";

const NotFound = () => {
  return (
    <>
      <div className="not-found">
        <h4>404</h4>
        <h5>
          This page cannot be found, <br />
          <Link to={"/home"}>click here</Link> to return to the home page
        </h5>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
