import React from "react";
import { useField, ErrorMessage } from "formik";
import styles from "../../styles/RegisterForm.module.css";

export const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={styles.field}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={styles.field}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};
