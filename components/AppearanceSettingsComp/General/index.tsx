import React from "react";
import styles from "./styles.module.css";
import Toggle from "../../Toggle";

const General = () => {
  return (
    <>
      <h1 className={styles.generalH1}>General</h1>
      <div className={styles.general}>
        <p>Allow Sanar to send you health tips</p>
        <Toggle styleColor="#122750" />
      </div>
    </>
  );
};

export default General;
