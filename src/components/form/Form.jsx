import React from "react";
import styles from "./Form.module.scss";

const Form = ({ title }) => {
  return (
    <form className={styles.form}>
      <div>
        <input type="email" placeholder="E-mail" />
      </div>
      <div>
        <span className={styles.form_error}></span>
      </div>

      <div>
        <input type="password" placeholder="Password" />
      </div>
      <div>
        <span className={styles.form_error}></span>
      </div>
      <button type="submit">{title}</button>
      <span className={styles.form_error}></span>
    </form>
  );
};

export default Form;
