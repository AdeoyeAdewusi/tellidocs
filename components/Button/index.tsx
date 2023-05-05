import React from "react";
import styles from "./styles.module.css";

const Button = ({ text }: { text: any }) => {
  return <div className={styles.buttons}>{text}</div>;
};

export default Button;
