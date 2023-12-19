import React, { useState } from "react";
import classNames from "classnames";
import styles from "./style.module.css";
const LOGIN_FORM_REG_EXP = {
  login: /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!#%._].*).{8,16}$/,
  email: /^.+@.+$/,
  password: /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!#%._].*).{8,16}$/,
};

function SignUpForm() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleLoginChange({ target: { value } }) {
    setLogin(value);
  }
  function handleEmailChange({ target: { value } }) {
    setEmail(value);
  }
  function handlePasswordChange({ target: { value } }) {
    setPassword(value);
  }
  function handleTogglePassword() {
    setShowPassword(!showPassword);
  }
  function handleSubmit(e) {
    e.preventDefault();

    setLogin("");
    setEmail("");
    setPassword("");
  }

  const loginClassName = classNames(styles.formInput, {
    [styles.valid]: LOGIN_FORM_REG_EXP.login.test(login),
    [styles.invalid]: !LOGIN_FORM_REG_EXP.login.test(login),
  });
  const emailClassName = classNames(styles.formInput, {
    [styles.valid]: LOGIN_FORM_REG_EXP.email.test(email),
    [styles.invalid]: !LOGIN_FORM_REG_EXP.email.test(email),
  });
  const passwordClassName = classNames(styles.formInput, {
    [styles.valid]: LOGIN_FORM_REG_EXP.password.test(password),
    [styles.invalid]: !LOGIN_FORM_REG_EXP.password.test(password),
  });

  return (
    <>
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>SignUp Form</h2>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <label className={styles.formLabel}>
            {""}
            <span className={styles.labelCaption}>Name:</span>
            <input
              className={loginClassName}
              type="text"
              value={login}
              onChange={handleLoginChange}
              placeholder="YourName"
              name="login"
              autoFocus
            />
          </label>
          <label className={styles.formLabel}>
            {""}
            <span className={styles.labelCaption}>Email:</span>
            <input
              className={emailClassName}
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="qwert@rwer"
              name="email"
            />
          </label>
          <label className={styles.formLabel}>
            {""}
            <span className={styles.labelCaption}>Password:</span>
            <input
              className={passwordClassName}
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              placeholder="123455"
              name="password"
            />
            <button
              className={styles.togglePasswordBtn}
              type="button"
              onClick={handleTogglePassword}
            >
              {showPassword ? "Hide Password" : "Show Password"}
            </button>
          </label>

          <button className={styles.loginBtn} type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUpForm;
