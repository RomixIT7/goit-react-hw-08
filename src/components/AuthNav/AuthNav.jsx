import { NavLink } from "react-router-dom";

import css from "./AuthNav.module.css";

const AuthNav = ({ isLinkActive }) => {
  return (
    <div className={css.authNav}>
      <NavLink className={isLinkActive} to="/register">
        Register
      </NavLink>
      <NavLink className={isLinkActive} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
