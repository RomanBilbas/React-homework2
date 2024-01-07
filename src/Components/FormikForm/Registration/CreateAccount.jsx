import { Form, Formik, Field, ErrorMessage } from "formik";
import { USER_CONTACTS_VALIDATION_SCHEMA } from "../CHEMA/validation";
import styles from "./formik.module.scss";
import classNames from "classnames";
function CreateAccount() {
  const initialValues = {
    userName: "",
    surName: "",
    email: "",
    age: "",
    password: "",
  };
  const handleSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={USER_CONTACTS_VALIDATION_SCHEMA}
      >
        {(formikProps) => {
          const userNameClassNames = classNames(styles.input, {
            [styles.valid]:
              formikProps.touched.userName && !formikProps.errors.userName,
            [styles.invalid]:
              formikProps.touched.userName && formikProps.errors.userName,
          });
          const surNameClassNames = classNames(styles.input, {
            [styles.valid]:
              formikProps.touched.surName && !formikProps.errors.surName,
            [styles.invalid]:
              formikProps.touched.surName && formikProps.errors.surName,
          });
          const emailClassNames = classNames(styles.input, {
            [styles.valid]:
              formikProps.touched.email && !formikProps.errors.email,
            [styles.invalid]:
              formikProps.touched.email && formikProps.errors.email,
          });
          const ageClassNames = classNames(styles.input, {
            [styles.valid]: formikProps.touched.age && !formikProps.errors.age,
            [styles.invalid]: formikProps.touched.age && formikProps.errors.age,
          });
          return (
            <Form className={styles.form}>
              <label>
                <span>Name:</span>
                <Field
                  className={userNameClassNames}
                  type="text"
                  name="userName"
                  placeholder="Name"
                  autoFocus
                />
                <ErrorMessage
                  name="userName"
                  className={styles.error}
                  component="span"
                />
              </label>
              <label>
                <span>Sur Name:</span>
                <Field
                  className={surNameClassNames}
                  type="text"
                  name="surName"
                  placeholder="Your surnamee"
                />
                <ErrorMessage
                  name="surName"
                  className={styles.error}
                  component="span"
                />
              </label>
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
                <span>Age:</span>
                <Field className={ageClassNames} type="date" name="age" />
                <ErrorMessage
                  name="age"
                  className={styles.error}
                  component="span"
                />
              </label>
              <label>
                <span>Password:</span>
                <Field
                  className={styles.input}
                  type="password"
                  name="password"
                />

                <ErrorMessage
                  name="password"
                  className={styles.error}
                  component="span"
                />
              </label>

              <button type="submit">Add</button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default CreateAccount;
