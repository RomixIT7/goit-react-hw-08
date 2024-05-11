import clsx from "clsx";
import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";

import css from "./AppBar.module.css";

const isLinkActive = ({ isActive }) => {
  return clsx(css.link, { [css.active]: isActive });
};

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <Navigation isLinkActive={isLinkActive} />
      {isLoggedIn ? (
        <UserMenu isLinkActive={isLinkActive} />
      ) : (
        <AuthNav isLinkActive={isLinkActive} />
      )}
    </>
  );
};

export default AppBar;
