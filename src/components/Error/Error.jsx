import css from "./Error.module.css";

const Error = () => {
  return (
    <div className={css.errorBox}>
      <p className={css.errorMsg}>
        <span className={css.errorIcon}>&#10060;</span> <br />
        Sorry, something went wrong. Try to reload your page!
      </p>
    </div>
  );
};

export default Error;
