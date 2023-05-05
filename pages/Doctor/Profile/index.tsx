import React, { useState } from "react";
import DashLayout from "../../../components/DashLayout";
import styles from "./styles.module.css";
import { BiChevronRight, BiPencil, BiLock, BiUser } from "react-icons/bi";
import { RiStethoscopeFill } from "react-icons/ri";
import { TbReportMedical } from "react-icons/tb";
import { TiDocumentText } from "react-icons/ti";
import { AiOutlineCreditCard } from "react-icons/ai";
import PersonalInformation from "../../../components/AppearanceComp/Profile/indx";
import ChangePassword from "../../../components/AppearanceComp/ChangePassword";
import ProfessionalInformation from "../../../components/AppearanceComp/ProfessionalInformation";
import Qualifications from "../../../components/AppearanceComp/Qualification";
import Refferees from "../../../components/AppearanceComp/Refferees";
import BankInfo from "../../../components/AppearanceComp/BankInformation";

const Profile = () => {
  const [page, setPage] = useState("Profile Information");
  const profileComponenet = () => {
    switch (page) {
      case "Profile Information":
        return <PersonalInformation />;
      case "Change Password":
        return <ChangePassword />;
      case "Professional information":
        return <ProfessionalInformation />;
      case "Qualifications":
        return <Qualifications />;
      case "Referees":
        return <Refferees />;
      case "Bank Information":
        return <BankInfo />;
    }
  };
  return (
    <DashLayout>
      <div className={styles.profileLayout}>
        <div>
          <div className={styles.profile}>
            <h1>Profile</h1>
          </div>
          <div
            className={styles.profileSelection}
            onClick={() => setPage("Profile Information")}
          >
            <div className={styles.profileSelectionInn}>
              <BiPencil />
              <h2>Personal information</h2>
            </div>
            <BiChevronRight />
          </div>

          <div
            className={styles.profileSelection}
            onClick={() => setPage("Change Password")}
          >
            <div className={styles.profileSelectionInn}>
              <BiLock />
              <h2>Change password</h2>
            </div>
            <BiChevronRight />
          </div>

          <div
            className={styles.profileSelection}
            onClick={() => setPage("Professional information")}
          >
            <div className={styles.profileSelectionInn}>
              <RiStethoscopeFill />
              <h2>Professional information</h2>
            </div>
            <BiChevronRight />
          </div>

          <div
            className={styles.profileSelection}
            onClick={() => setPage("Qualifications")}
          >
            <div className={styles.profileSelectionInn}>
              <TbReportMedical />
              <h2>Qualifications</h2>
            </div>
            <BiChevronRight />
          </div>

          <div
            className={styles.profileSelection}
            onClick={() => setPage("Documents")}
          >
            <div className={styles.profileSelectionInn}>
              <TiDocumentText />
              <h2>Documents</h2>
            </div>
            <BiChevronRight />
          </div>

          <div
            className={styles.profileSelection}
            onClick={() => setPage("Referees")}
          >
            <div className={styles.profileSelectionInn}>
              <BiUser />
              <h2>Referees</h2>
            </div>
            <BiChevronRight />
          </div>

          <div
            className={styles.profileSelection}
            onClick={() => setPage("Bank Information")}
          >
            <div className={styles.profileSelectionInn}>
              <AiOutlineCreditCard />
              <h2>Bank Information</h2>
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

export default Profile;
