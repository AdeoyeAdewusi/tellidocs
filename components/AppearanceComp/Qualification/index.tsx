import React from "react";
import styles from "./styles.module.css";
import Button from "../../Button";

const Qualifications = () => {
  return (
    <div className={styles.qualification}>
      <div className={styles.chng}>
        <h1>Professional information</h1>
      </div>
      <div className={styles.cate}>
        <div>
          <div>
            <label>Degree</label>
            <select>
              <option></option>
            </select>
          </div>
          <div>
            <label>Name of hospital of practice</label>
            <input type="text" />
          </div>
          <div>
            <label>Country of hospital of practice</label>
            <select>
              <option></option>
            </select>
          </div>
          <div>
            <label>License number</label>
            <input type="text" />
          </div>
        </div>
        <div>
          <div>
            <label>University</label>
            <select>
              <option></option>
            </select>
          </div>
          <div>
            <label>Contact of hospital of practice</label>
            <input type="text" />
          </div>
          <div>
            <label>State of hospital of practice</label>
            <select>
              <option></option>
            </select>
          </div>
          <div>
            <label>License expiry date</label>
            <input type="text" />
          </div>
        </div>
      </div>
      <div className={styles.saveBtn}>
        <Button text="SAVE" />
      </div>
    </div>
  );
};

export default Qualifications;
