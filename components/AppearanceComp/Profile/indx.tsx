import React from "react";
import styles from "./styles.module.css";

const PersonalInformation = () => {
  return (
    <div>
      <h1>Personal information</h1>
      <div className={styles.personalImage}>
        <img src="/Assets/Images/personalInfo.png" width={100} height={100} />
      </div>
      <form>
        <div className={styles.inputsTop}>
          <div>
            <div>
              <label>First name</label>
              <input type="text" />
            </div>
            <div>
              <label>Last name</label>
              <input type="text" />
            </div>
            <div>
              <label>Phone number</label>
              <input type="text" />
            </div>
          </div>
          <div>
            <div>
              <label>Email</label>
              <input type="text" />
            </div>
            <div>
              <label>Country</label>
              <select>
                <option></option>
              </select>
            </div>
            <div>
              <label>State</label>
              <select>
                <option></option>
              </select>
            </div>
          </div>
        </div>
        <div className={styles.streetAdd}>
          <label>Street Address</label>
          <input type="text" />
        </div>
        <div className={styles.countryGendr}>
          <div>
            <label>Country</label>
            <input type="date" />
          </div>
          <div>
            <label>Gender</label>
            <select>
              <option>Choose your gender</option>
            </select>
          </div>
        </div>
        <div>
          <button className={styles.button}>SAVE</button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInformation;
