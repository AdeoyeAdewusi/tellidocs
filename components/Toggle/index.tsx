import React from "react";
import styles from "./styles.module.css";

const Toggle = ({ styleColor }: { styleColor: any }) => {
  const styless = {
    backgroundColor: styleColor,
    borderRadius: "8px",
    height: "14px",
    width: "22px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "2px 3px",
  };
  return (
    <div style={styless}>
      <div className={styles.toggle}></div>
    </div>
  );
};

export default Toggle;
