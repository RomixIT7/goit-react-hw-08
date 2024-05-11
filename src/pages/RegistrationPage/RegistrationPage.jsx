import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

import css from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <>
      <Helmet>
        <title>Registration Page</title>
      </Helmet>

      <RegistrationForm />
      <Link className={css.link} to="/login">
        I already have a registered account
      </Link>
    </>
  );
};

export default RegistrationPage;
