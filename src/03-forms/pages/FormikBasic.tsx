import { FormikErrors, useFormik } from "formik";
import { initialFormikBasic } from "./imports";

import "../styles/styles.css";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasic = () => {
  const validate = ({ firstName, lastName, email }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    if (!firstName.trim()) {
      errors.firstName = "Required";
    } else if (firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    }
    if (!lastName.trim()) {
      errors.lastName = "Required";
    } else if (lastName.length > 20) {
      errors.lastName = "Must be 20 characters or less";
    }
    if (!email.trim()) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email.trim())
    ) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: initialFormikBasic,
    onSubmit: (values) => {
      console.log(values);
      handleReset(initialFormikBasic);
    },
    validate,
  });

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    handleReset,
    touched,
  } = formik;

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.firstName}
        />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastName}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor="email">Email Adress</label>
        <input
          type="email"
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
