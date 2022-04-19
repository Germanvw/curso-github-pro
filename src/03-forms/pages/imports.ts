import * as Yup from "yup";

export const validationSchemaFormikComponents = Yup.object({
  firstName: Yup.string()
    .min(3, "Must be 3 characters or more")
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .min(3, "Must be 3 characters or more")
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  jobType: Yup.string()
    .required("Required")
    .notOneOf(["designer"], "This option is not available"),
  terms: Yup.boolean().oneOf([true], "You must accept the terms"),
});

export const validationRegisterFormik = Yup.object({
  name: Yup.string()
    .min(2, "Must be 2 characters or more")
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Must be 6 characters or more")
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  passwordConfirm: Yup.string()
    .min(6, "Must be 6 characters or more")
    .max(20, "Must be 20 characters or less")
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
  terms: Yup.boolean().oneOf([true], "You must accept the terms"),
});

export const initialFormikBasic = {
  firstName: "",
  lastName: "",
  email: "",
  terms: false,
  jobType: "",
};

export const initialRegisterFormik = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
  terms: false,
};

export const formikMap = [
  {
    label: "First Name",
    name: "firstName",
    type: "text",
    placeholder: "First Name",
  },
  {
    label: "Last Name",
    name: "lastName",
    type: "text",
    placeholder: "Last Name",
  },
  {
    label: "Email Adress",
    name: "email",
    type: "email",
    placeholder: "Email Adress",
  },
];

export const formikMapRegister = [
  {
    label: "Name",
    name: "name",
    type: "text",
    placeholder: "Name...",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Email Adress",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "Password",
  },
  {
    label: "Password Confirmation",
    name: "passwordConfirm",
    type: "password",
    placeholder: "Password Confirmation",
  },
];

export const jobTypeOptions = [
  {
    value: "",
    description: "Pick a job type...",
  },
  {
    value: "developer",
    description: "Developer",
  },
  {
    value: "designer",
    description: "Designer",
  },
  {
    value: "it-senior",
    description: "It-Senior",
  },
  {
    value: "i-jr",
    description: "It-Junior",
  },
];
