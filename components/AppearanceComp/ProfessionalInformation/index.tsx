import React from "react";
import styles from "./styles.module.css";

const ProfessionalInformation = () => {
  return (
    <div className={styles.professionalInfo}>
      <div className={styles.chng}>
        <h1>Professional information</h1>
      </div>
      <div className={styles.bio}>
        <label>Bio</label>
        <textarea rows={5} cols={56}></textarea>
      </div>
      <div className={styles.spoken}>
        <p className={styles.langP}>Languages spoken</p>
        <div className={styles.mainLang}>
          <p></p>
          <div className={styles.languages}>
            <div className={styles.active}>
              <p>English</p>
            </div>
            <div>
              <p>Yoruba</p>
            </div>
            <div>
              <p>Igbo</p>
            </div>
            <div>
              <p>Hausa</p>
            </div>
            <div>
              <p>French</p>
            </div>
            <div>
              <p>Spanish</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bio}>
        <label>If others, please specify?</label>
        <textarea rows={5} cols={56}></textarea>
      </div>
      <div>
        <div className={styles.categories}>
          <div>
            <label>Category</label>
            <select>
              <option></option>
            </select>
          </div>
          <div>
            <label>Specialization</label>
            <select>
              <option></option>
            </select>
          </div>
        </div>
        <div className={styles.categories}>
          <div>
            <label>Experience</label>
            <select>
              <option></option>
            </select>
          </div>
          <div>
            <label>Professional status</label>
            <select>
              <option></option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalInformation;
