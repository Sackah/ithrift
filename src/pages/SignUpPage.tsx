import SignUpNav from "../components/nav/SignUpNav";
import SignUpBox from "../components/signup/SignUpBox";
import "./styles/SignUp.css";

const SignUpPage = () => {
  return (
    <>
      <SignUpNav />
      <section className="sign-up-section1"></section>
      <section className="sign-up-container">
        <h2>You're one click away from turning useless into useful</h2>
        <SignUpBox />
      </section>
    </>
  );
};

export default SignUpPage;
