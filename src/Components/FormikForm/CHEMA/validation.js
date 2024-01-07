import * as yup from "yup";

export const USER_CONTACTS_VALIDATION_SCHEMA = yup.object({
  userName: yup
    .string()
    .min(2)
    .max(64)
    .matches(/^[A-Z][a-z]*$/)
    .required(),
  surName: yup
    .string()
    .min(2)
    .max(64)
    .matches(/^[A-Z][a-z]*$/)
    .required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(/^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!#%._].*).{8,16}$/)
    .required(),
  age: yup.date().max(new Date()),
});

export const LOGIN_CONTACTS_VALIDATION_CHEMA = yup.object({
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(/^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!#%._].*).{8,16}$/)
    .required(),
});
