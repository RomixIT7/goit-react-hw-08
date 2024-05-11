import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectUserName } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

import css from "./UserMenu.module.css";

const UserMenu = ({ isLinkActive }) => {
  const dispatch = useDispatch();

  const userName = useSelector(selectUserName);

  const onLogOut = () => {
    dispatch(logout());
  };

  return (
    <div className={css.userMenu}>
      <NavLink className={isLinkActive} to="/contacts">
        Contacts
      </NavLink>
      <div className={css.userInfo}>
        <p className={css.greeting}>Welcome, {userName}</p>
        <button onClick={onLogOut} className={css.logOut} type="button">
          Log out
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
