import { Form, Formik, Field, ErrorMessage } from "formik";
import { LOGIN_CONTACTS_VALIDATION_CHEMA } from "../CHEMA/validation";
import classNames from "classnames";
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
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LOGIN_CONTACTS_VALIDATION_CHEMA}
    >
      {(formikProps) => {
        const emailClassNames = classNames(styles.input, {
          [styles.valid]:
            formikProps.touched.email && !formikProps.errors.email,
          [styles.invalid]:
            formikProps.touched.email && formikProps.errors.email,
        });

        return (
          <Form className={styles.form}>
            <label>
              <span>Email:</span>
              <Field
                className={emailClassNames}
                type="email"
                name="email"
                placeholder="your@mail"
              />
              <ErrorMessage
                name="email"
                className={styles.error}
                component="span"
              />
            </label>
            <label>
              <span>Password:</span>
              <Field className={styles.input} type="password" name="password" />

              <ErrorMessage
                name="password"
                className={styles.error}
                component="span"
              />
            </label>

            <button type="submit">Login</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default loginAccount;
