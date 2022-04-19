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

export const initialFormikBasic = {
  firstName: "",
  lastName: "",
  email: "",
  terms: false,
  jobType: "",
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
