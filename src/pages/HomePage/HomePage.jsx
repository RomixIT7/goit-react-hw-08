import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <div className={css.homePage}>
        <h1 className={css.title}>Welcome to our site!</h1>
        <p className={css.description}>Here you can save your contacts</p>
        <Link className={css.link} to="/contacts">
          Start
        </Link>
      </div>
    </>
  );
};

export default HomePage;
