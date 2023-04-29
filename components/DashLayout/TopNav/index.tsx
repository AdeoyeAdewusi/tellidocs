import React from "react";
import styles from "./styles.module.css";
import NotificationSvg from "../../SVGs/notificationSvg";
import { BsChevronDown } from "react-icons/bs";
import WorldSvg from "../../SVGs/worldSvg";

const TopNav = () => {
  return (
    <div className={styles.topNav}>
      <div className={styles.topNavFlex}>
        <div className={styles.topNavAvailFlex}>
          <p>Available now?</p>
          <div className={styles.topNavToggle}>
            <div className={styles.topnavSwitch}></div>
          </div>
        </div>
        <div>
          <div className={styles.Language}>
            <WorldSvg />
            <p>EN</p>
            <BsChevronDown />
          </div>
        </div>
        <NotificationSvg />
      </div>
    </div>
  );
};

export default TopNav;
