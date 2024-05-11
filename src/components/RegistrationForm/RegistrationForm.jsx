import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { MAX_NAME_LENGTH, MIN_PASSWORD_LENGTH } from "../utils/constants";

import { register } from "../../redux/auth/operations.js";

import css from "./RegistrationForm.module.css";

const formData = {
  name: "",
  email: "",
  password: "",
};

const registerValidationScheme = Yup.object().shape({
  name: Yup.string()
    .required("Name is required!")
    .max(
      MAX_NAME_LENGTH,
      `Name must be less than ${MAX_NAME_LENGTH} characters!`
    )
    .trim(),
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

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={formData}
      validationSchema={registerValidationScheme}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <p className={css.formTitle}>Register</p>
        <label className={css.label}>
          <span>Name:</span>
          <Field
            className={css.input}
            type="text"
            name="name"
            placeholder="Enter your name..."
          />
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="span"
          />
        </label>
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

export default RegistrationForm;
