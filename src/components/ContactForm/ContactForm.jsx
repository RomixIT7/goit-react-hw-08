import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import { MAX_CONTACT_LENGTH, MIN_CONTACT_LENGTH } from "../utils/constants";

import { addContact } from "../../redux/contacts/operations";

import css from "./ContactForm.module.css";

const formData = {
  name: "",
  number: "",
};

const contactValidationScheme = Yup.object().shape({
  name: Yup.string()
    .min(
      MIN_CONTACT_LENGTH,
      `Name must be more than ${MIN_CONTACT_LENGTH} characters`
    )
    .max(
      MAX_CONTACT_LENGTH,
      `Name must be less than ${MAX_CONTACT_LENGTH} characters`
    )
    .required("This field is required")
    .trim(),
  number: Yup.string()
    .min(
      MIN_CONTACT_LENGTH,
      `Number must be more than ${MIN_CONTACT_LENGTH} characters`
    )
    .max(
      MAX_CONTACT_LENGTH,
      `Number must be less than ${MAX_CONTACT_LENGTH} characters`
    )
    .required("This field is required")
    .matches(
      /^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
      "Invalid number format. Please, enter number in format XXX-XXX-XX-XX. Use only numbers."
    )
    .trim(),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={formData}
      validationSchema={contactValidationScheme}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.formLabel}>
          <span className={css.labelText}>Name</span>
          <Field className={css.formInput} type="text" name="name"></Field>
          <ErrorMessage name="name" as="span" />
        </label>
        <label className={css.formLabel}>
          <span className={css.labelText}>Number</span>
          <Field className={css.formInput} type="text" name="number"></Field>
          <ErrorMessage name="number" as="span" />
        </label>
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
