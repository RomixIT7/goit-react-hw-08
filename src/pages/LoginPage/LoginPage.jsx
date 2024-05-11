import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import LoginForm from "../../components/LoginForm/LoginForm";

import css from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login Page</title>
      </Helmet>

      <LoginForm />
      <Link className={css.link} to="/register">
        I don&apos;t have account
      </Link>
    </>
  );
};

export default LoginPage;
