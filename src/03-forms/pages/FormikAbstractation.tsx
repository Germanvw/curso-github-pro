import { Formik, Form } from "formik";
import {
  formikMap,
  initialFormikBasic,
  jobTypeOptions,
  validationSchemaFormikComponents,
} from "./imports";
import { TextInput, SelectInput, CheckboxInput } from "../components";

import "../styles/styles.css";

export const FormikAbstractation = () => {
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
            {formikMap.map((input, index) => (
              <TextInput {...input} key={index} />
            ))}
            <SelectInput label="Job Type" name="jobType">
              {jobTypeOptions.map(({ value, description }, index) => (
                <option value={value} key={index}>
                  {description}
                </option>
              ))}
            </SelectInput>
            <CheckboxInput label="Terms & Conditions" name="terms" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
