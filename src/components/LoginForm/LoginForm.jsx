import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { MIN_PASSWORD_LENGTH } from "../utils/constants";

import { login } from "../../redux/auth/operations";

import css from "./LoginForm.module.css";

const formData = {
  email: "",
  password: "",
};

const logInValidationScheme = Yup.object().shape({
  email: Yup.string()
    .required("Email is required!")
    .email("This is not valid email format!")
    .trim(),
  password: Yup.string()
    .required("Password is required!")
    .min(
      MIN_PASSWORD_LENGTH,
      `Your password must be greater than ${MIN_PASSWORD_LENGTH} characters!`
    )
    .trim(),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={formData}
      validationSchema={logInValidationScheme}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <p className={css.formTitle}>Log In</p>
        <label className={css.label}>
          <span>Email:</span>
          <Field
            className={css.input}
            type="email"
            name="email"
            placeholder="Enter your email..."
          />
          <ErrorMessage
            className={css.errorMessage}
            name="email"
            component="span"
          />
        </label>
        <label className={css.label}>
          <span>Password:</span>
          <Field
            className={css.input}
            type="password"
            name="password"
            placeholder="Enter your password..."
          />
          <ErrorMessage
            className={css.errorMessage}
            name="password"
            component="span"
          />
        </label>
        <button className={css.button} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
