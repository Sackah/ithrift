import SignUpNav from "../components/nav/SignUpNav";
import Footer from "../components/signup/Footer";
import SignUpBox from "../components/signup/SignUpBox";
import "./styles/SignUp.css";

const SignUpPage = () => {
  return (
    <>
      <SignUpNav />
      <section className="sign-up-section1">
        <h3>
          Share more, <br /> Waste less
        </h3>
        <p>
          Combat waste with iTHrift: the platform that connects you with
          <br /> locals to exchange items you no longer need and discover things
          you do.
        </p>
      </section>
      <section className="sign-up-container" id="sign-up">
        <h2>You're one click away from turning useless into useful</h2>
        <SignUpBox />
      </section>
      <Footer />
    </>
  );
};

export default SignUpPage;
