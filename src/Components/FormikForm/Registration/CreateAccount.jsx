import { Form, Formik } from "formik";
import { USER_CONTACTS_VALIDATION_SCHEMA } from "../CHEMA/validation";
import Input from "../Input";
import styles from "./formik.module.scss";

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
  const classes = {
    error: styles.error,
    input: styles.input,
    valid: styles.valid,
    invalid: styles.invalid,
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={USER_CONTACTS_VALIDATION_SCHEMA}
      >
        <Form className={styles.form}>
          <Input
            name="userName"
            label="Name:"
            type="text"
            placeholder="Name"
            classes={classes}
            autoFocus
          />
          <Input
            name="surName"
            label="Sur Name:"
            type="text"
            placeholder="Your surnamee"
            classes={classes}
          />
          <Input
            name="email"
            label="Email:"
            type="email"
            placeholder="your@mail"
            classes={classes}
          />
          <Input
            name="age"
            label="Age:"
            type="date"
            placeholder="your@mail"
            classes={classes}
          />
          <Input
            name="password"
            label="Password:"
            type="password"
            classes={classes}
          />

          <button type="submit">Add</button>
        </Form>
      </Formik>
    </>
  );
}

export default CreateAccount;
