import React from "react";
import styles from "./styles.module.css";
import Toggle from "../../Toggle";

const Security = () => {
  return (
    <>
      <h1 className={styles.generalH1}>Security</h1>
      <div className={styles.Secutity}>
        <div className={styles.allowOnly}>
          <p>Allow Sanar to send you health tips</p>
          <p>Only you and your patient will be able to see your messages</p>
        </div>
        <Toggle styleColor="#E7B028" />
      </div>
    </>
  );
};

export default Security;
