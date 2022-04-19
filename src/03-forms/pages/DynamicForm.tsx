import { Formik, Form } from "formik";
import { CheckboxInput, SelectInput, TextInput } from "../components";
import dataJson from "../data/dynamic-form.json";
import * as Yup from "yup";

const initialValues: { [key: string]: any } = {};
const validationFields: { [key: string]: any } = {};

for (const input of dataJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;
  let schema = Yup.string();
  for (const validation of input.validations) {
    if (validation.type === "required") {
      schema = schema.required(validation.message);
    }

    if (validation.type === "min") {
      schema = schema.min(validation.length!, validation.message);
    }

    if (validation.type === "max") {
      schema = schema.max(validation.length!, validation.message);
    }

    if (validation.type === "email") {
      schema = schema.email(validation.message);
    }

    if (validation.type === "match") {
      schema = schema.oneOf([Yup.ref("password"), null], validation.message);
    }

    validationFields[input.name] = schema;
  }
}

const validationSchema = Yup.object({ ...validationFields });

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {({ handleReset }) => (
          <Form noValidate>
            {dataJson.map(
              ({ type, name, placeholder, label, options }, index) => {
                if (
                  type === "text" ||
                  type === "email" ||
                  type === "password"
                ) {
                  return (
                    <TextInput
                      key={index}
                      label={label}
                      type={type}
                      placeholder={placeholder}
                      name={name}
                    />
                  );
                } else if (type === "select") {
                  return (
                    <SelectInput key={name} label={label} name={name}>
                      <option value="">Select an Ocupation</option>
                      {options?.map(({ id, label }) => (
                        <option key={id} value={label}>
                          {label}
                        </option>
                      ))}
                    </SelectInput>
                  );
                } else if (type === "checkbox") {
                  return (
                    <CheckboxInput key={index} label={label} name={name} />
                  );
                } else {
                  return <label>Invalid Input Type</label>;
                }
              }
            )}
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
