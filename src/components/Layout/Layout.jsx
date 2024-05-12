import { useSelector } from "react-redux";

import { selectIsError, selectIsLoading } from "../../redux/global/selectors";

import AppBar from "../AppBar/AppBar";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

import css from "./Layout.module.css";

const Layout = ({ children }) => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  return (
    <>
      {isLoading && !isError && <Loader />}
      {isError && <Error />}
      <header className={css.header}>
        <AppBar />
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
