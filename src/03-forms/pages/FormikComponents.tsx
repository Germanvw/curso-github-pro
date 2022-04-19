import { Formik, Field, Form, ErrorMessage } from "formik";
import {
  formikMap,
  initialFormikBasic,
  jobTypeOptions,
  validationSchemaFormikComponents,
} from "./imports";

import "../styles/styles.css";

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Basic Tutorial</h1>
      <Formik
        initialValues={initialFormikBasic}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchemaFormikComponents}
      >
        {() => (
          <Form className="formik-form">
            {formikMap.map(({ label, name, type }, index) => (
              <div className="formik-item" key={index}>
                <label htmlFor={name}>{label}</label>
                <Field name={name} type={type} />
                <ErrorMessage name={name} component="span" />
              </div>
            ))}
            <div className="formik-item">
              <label htmlFor="jobType">Job Type</label>
              <Field name="jobType" as="select">
                {jobTypeOptions.map(({ value, description }, index) => (
                  <option value={value} key={index}>
                    {description}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="jobType" component="span" />
            </div>
            <div className="formik-item">
              <label>
                <Field name="terms" type="checkbox" />
                Terms and Conditions
              </label>
              <ErrorMessage name="terms" component="span" />
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
