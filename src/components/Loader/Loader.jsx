import { BallTriangle } from "react-loader-spinner";

import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loaderWrapper}>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="violet"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
