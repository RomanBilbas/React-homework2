import { Field } from "formik";
import classNames from "classnames";

function Input({ name, label, classes, ...restProps }) {
  return (
    <Field name={name}>
      {({ field, form: { touched, errors }, meta }) => {
        const inputClassNames = classNames(classes.input, {
          [classes.valid]: meta.touched && !meta.errors,
          [classes.invalid]: meta.touched && !meta.errors,
        });
        return (
          <label>
            <span>{label}</span>
            <input className={inputClassNames} {...field} {...restProps} />
            {meta.touched && meta.error && (
              <span className={classes.error}>{meta.error}</span>
            )}
          </label>
        );
      }}
    </Field>
  );
}

export default Input;
