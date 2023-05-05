import React, { useState } from "react";
import DashLayout from "../../../components/DashLayout";
import styles from "./styles.module.css";
import { BiChevronRight, BiLock, BiBell } from "react-icons/bi";
import { FiKey } from "react-icons/fi";
import { TbReportMedical } from "react-icons/tb";
import { TiDocumentText } from "react-icons/ti";
import { AiOutlineSetting, AiOutlineQuestionCircle } from "react-icons/ai";
import General from "../../../components/AppearanceSettingsComp/General";
import Notification from "../../../components/AppearanceSettingsComp/Notification";
import Security from "../../../components/AppearanceSettingsComp/Security";
import AdditionalResources from "../../../components/AppearanceSettingsComp/AdditionalResources";

const Settings = () => {
  const [page, setPage] = useState("General");
  const profileComponenet = () => {
    switch (page) {
      case "General":
        return <General />;
      case "Notifications":
        return <Notification />;
      case "Security":
        return <Security />;
      case "Additional Resources":
        return <AdditionalResources />;
    }
  };
  return (
    <DashLayout>
      <div className={styles.profileLayout}>
        <div>
          <div className={styles.profile}>
            <h1>Settings</h1>
          </div>
          <div
            className={styles.profileSelection}
            onClick={() => setPage("General")}
          >
            <div className={styles.profileSelectionInn}>
              <AiOutlineSetting />
              <h2>General</h2>
            </div>
            <BiChevronRight />
          </div>

          <div
            className={styles.profileSelection}
            onClick={() => setPage("Notifications")}
          >
            <div className={styles.profileSelectionInn}>
              <BiBell />
              <h2>Notifications</h2>
            </div>
            <BiChevronRight />
          </div>

          <div
            className={styles.profileSelection}
            onClick={() => setPage("Security")}
          >
            <div className={styles.profileSelectionInn}>
              <FiKey />
              <h2>Security</h2>
            </div>
            <BiChevronRight />
          </div>

          <div
            className={styles.profileSelection}
            onClick={() => setPage("Additional Resources")}
          >
            <div className={styles.profileSelectionInn}>
              <AiOutlineQuestionCircle />
              <h2>Additional Resources</h2>
            </div>
            <BiChevronRight />
          </div>
        </div>
        <hr />
        <div className={styles.context}>
          <div className={styles.profileContent}>{profileComponenet()}</div>
        </div>
      </div>
    </DashLayout>
  );
};

export default Settings;
