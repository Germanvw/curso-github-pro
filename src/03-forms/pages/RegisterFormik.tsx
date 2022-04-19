import { Form, Formik } from "formik";
import {
  formikMapRegister,
  initialRegisterFormik,
  validationRegisterFormik,
} from "./imports";
import "../styles/styles.css";
import { CheckboxInput, TextInput } from "../components";

export const RegisterFormik = () => {
  return (
    <div>
      <h1>Register Formik</h1>
      <Formik
        initialValues={initialRegisterFormik}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationRegisterFormik}
      >
        {({ handleReset }) => (
          <Form>
            {formikMapRegister.map((input, index) => (
              <TextInput {...input} key={index} />
            ))}
            <CheckboxInput name="terms" label="Terms & Conditions" />
            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
