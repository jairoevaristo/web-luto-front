import React from "react";
import styles from "./SignUp.module.css";
import { Register } from "../../../components";

export const SignUp: React.FC = () => {

  return (
    <div className={styles.container}>
      <Register/>
    </div>
  );
};