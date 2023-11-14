import SignUpNav from "../components/nav/SignUpNav";
import Footer from "../components/partials/Footer";
import SignUpBox from "../components/signup/SignUpBox";
import "./styles/SignUp.css";

const SignUpPage = () => {
  return (
    <>
      <SignUpNav />
      <section className="sign-up-section1">
        <div className="wrapper left-top">
          <h3>
            Share more, <br /> Waste less
          </h3>
          <p>
            Combat waste with iThrift: the platform that connects you with
            <br /> locals to exchange items you no longer need and discover
            things you do.
          </p>
        </div>
        <div className="wrapper right-bottom"></div>
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
