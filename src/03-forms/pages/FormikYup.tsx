import { useFormik } from "formik";
import * as Yup from "yup";
import { initialFormikBasic } from "./imports";

import "../styles/styles.css";

export const FormikYup = () => {
  const formik = useFormik({
    initialValues: initialFormikBasic,
    onSubmit: (values) => {
      console.log(values);
      handleReset(initialFormikBasic);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, "Must be 3 characters or more")
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .min(3, "Must be 3 characters or more")
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
  });

  const { errors, touched, handleSubmit, handleReset, getFieldProps } = formik;

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input type="text" {...getFieldProps("firstName")} />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}
        <label htmlFor="lastName">Last Name</label>
        <input type="text" {...getFieldProps("lastName")} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor="email">Email Adress</label>
        <input type="email" {...getFieldProps("email")} />
        {touched.email && errors.email && <span>{errors.email}</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
