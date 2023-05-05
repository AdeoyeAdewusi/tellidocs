import React from "react";
import styles from "./styles.module.css";

const BankInfo = () => {
  return (
    <div className={styles.bankInfo}>
      <div className={styles.chng}>
        <h1>Bank information</h1>
      </div>
      <div className={styles.bank}>
        <div>
          <label>Bank name</label>
          <select>
            <option></option>
          </select>
        </div>
        <div>
          <label>Account name</label>
          <input type="text" />
        </div>
        <div>
          <label>Account number</label>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default BankInfo;
