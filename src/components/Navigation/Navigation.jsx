import { NavLink } from "react-router-dom";

const Navigation = ({ isLinkActive }) => {
  return (
    <NavLink className={isLinkActive} to="/">
      Home
    </NavLink>
  );
};

export default Navigation;
