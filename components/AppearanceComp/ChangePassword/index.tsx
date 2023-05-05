import React from "react";
import styles from "./styles.module.css";
import Button from "../../Button";
import { BsCheckCircleFill } from "react-icons/bs";

const ChangePassword = () => {
  return (
    <>
      <div className={styles.chng}>
        <h1>Change password</h1>
      </div>
      <div className={styles.inputs}>
        <div>
          <label>Old password</label>
          <input type="text" />
        </div>
        <div>
          <label>New password</label>
          <input type="text" />
        </div>
        <div className={styles.checks}>
          <div>
            <BsCheckCircleFill />
            <p>6 characters minimum</p>
          </div>
          <div>
            <BsCheckCircleFill />
            <p>Must include at least one capital letter</p>
          </div>
          <div>
            <BsCheckCircleFill />
            <p>Must include at least one number</p>
          </div>
          <div>
            <BsCheckCircleFill />
            <p>Must include at least special character</p>
          </div>
        </div>
        <div>
          <label>Confirm new password</label>
          <input type="text" />
        </div>
        <div className={styles.saveBtn}>
          <Button text="SAVE" />
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
