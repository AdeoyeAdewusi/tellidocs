import React from "react";
import styles from "./styles.module.css";
import Toggle from "../../Toggle";

const Notification = () => {
  return (
    <>
      <h1 className={styles.general}>Notifications</h1>
      <div className={styles.notifs}>
        <div>
          <input type="checkbox" />
          <label>Email notifications</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>App notifications</label>
        </div>
      </div>
      <div className={styles.turn}>
        <div>
          <p>Turn on/off all notifications</p>
          <Toggle styleColor="#5BA121" />
        </div>
        <div>
          <p>Notify me when a patient books an appointment with me</p>
          <Toggle styleColor="#5BA121" />
        </div>
        <div>
          <p>Notify me when a patient reschedules an appointment with me</p>
          <Toggle styleColor="#5BA121" />
        </div>
        <div>
          <p>Notify me when a patient cancels an appointment with me</p>
          <Toggle styleColor="#5BA121" />
        </div>
        <div>
          <p>Notify me for new messages</p>
          <Toggle styleColor="#5BA121" />
        </div>
        <div>
          <p>Notify me for new messages</p>
          <Toggle styleColor="#5BA121" />
        </div>
      </div>
    </>
  );
};

export default Notification;
