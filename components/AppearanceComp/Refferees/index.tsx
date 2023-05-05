import React from "react";
import { BiUser } from "react-icons/bi";
import styles from "./styles.module.css";
import Button from "../../Button";

const Refferees = () => {
  return (
    <>
      {" "}
      <div className={styles.chng}>
        <h1>Professional information</h1>
      </div>
      <div className={styles.ref}>
        <BiUser className={styles.refss} />
        <p className={styles.youP}>You don’t have any referees yet.</p>
        <Button text="ADD REFEREE" />
      </div>
    </>
  );
};

export default Refferees;
