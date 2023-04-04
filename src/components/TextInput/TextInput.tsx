import React from "react";
import styles from "./TextInput.module.css";

interface TextInputProps {
  id?: string;
  name?: string;
  type?: "text" | "tel" | "email" | "number" | "password" | "date";
  pattern?: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
};

export const TextInput: React.FC<TextInputProps> = ({
  id,
  name,
  type,
  pattern,
  label,
  required,
  placeholder
}) => {

  return (
    <fieldset className={styles.fieldset}>
      <label className={styles.label} htmlFor={id}>{label}</label>
      <input className={styles.input} type={type} pattern={pattern} id={id} name={name} required={required} placeholder={placeholder}/>
    </fieldset>
  );
};