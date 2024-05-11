import AppBar from "../AppBar/AppBar";

import css from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={css.header}>
        <AppBar />
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
