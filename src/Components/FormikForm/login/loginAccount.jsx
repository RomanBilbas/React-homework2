import { Form, Formik } from "formik";
import { LOGIN_CONTACTS_VALIDATION_CHEMA } from "../CHEMA/validation";

import Input from "../Input";
import styles from "./login.module.scss";

function loginAccount() {
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.reserForm();
  };
  const classes = {
    error: styles.error,
    input: styles.input,
    valid: styles.valid,
    invalid: styles.invalid,
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LOGIN_CONTACTS_VALIDATION_CHEMA}
    >
      <Form className={styles.form}>
        <Input
          name="email"
          label="Email:"
          type="email"
          placeholder="your@mail"
          classes={classes}
        />
        <Input
          name="password"
          label="Password:"
          type="password"
          classes={classes}
        />

        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
}

export default loginAccount;
