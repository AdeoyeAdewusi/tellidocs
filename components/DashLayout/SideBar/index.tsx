import React, { useState } from "react";
import TelidocLogoSvg from "../../SVGs/telidocLogoSvg";
import styles from "./styles.module.css";
import HomeSvg from "../../SVGs/homeSvg";
import AppointmentsSvg from "../../SVGs/appointmentsSvg";
import ChatSvg from "../../SVGs/chatSvg";
import Financialssvg from "../../SVGs/financialssvg";
import DoctorsNotesSvg from "../../SVGs/doctorsNotesSvg";
import ProfileSvg from "../../SVGs/profileSvg";
import SettingsSvg from "../../SVGs/settingsSvg";
import QuestionSvg from "../../SVGs/questionSvg";
import LogoutSvg from "../../SVGs/logoutSvg";
import { useRouter } from "next/router";
import Link from "next/link";

const SideBar = () => {
  const [profile, setProfile] = useState(false);
  const [appointment, setAppointment] = useState(false);
  const [chat, setChat] = useState(false);
  const [financials, setFinancials] = useState(false);
  const [drNote, setDrNotes] = useState(false);
  const [profileS, setProfileS] = useState(false);
  const [settings, setSettings] = useState(false);
  const [questions, setQuestions] = useState(false);
  const [logout, setLogout] = useState(false);
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div className={styles.sideBar}>
      <div>
        <TelidocLogoSvg />
      </div>
      <div className={styles.menu}>
        <p className={styles.menuP}>MENU</p>
        <div className={styles.menuTop}>
          <div>
            <Link href="/Doctor/Dashboard">
              <div className={styles.overView}>
                <div
                  className={
                    profile
                      ? styles.active
                      : router.pathname === "/Doctor/Dashboard"
                      ? styles.active
                      : styles.overViewSvg
                  }
                  onMouseEnter={() => setProfile((prev) => !prev)}
                  onMouseLeave={() => setProfile((prev) => !prev)}
                >
                  <HomeSvg
                    active={
                      profile
                        ? "white"
                        : router.pathname === "/Doctor/Dashboard"
                        ? "white"
                        : ""
                    }
                  />
                </div>
                <p>Overview</p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/Doctor/Appointment">
              <div className={styles.overView}>
                <div
                  className={
                    appointment
                      ? styles.active
                      : router.pathname === "/Doctor/Appointment"
                      ? styles.active
                      : styles.overViewSvg
                  }
                  onMouseEnter={() => setAppointment((prev) => !prev)}
                  onMouseLeave={() => setAppointment((prev) => !prev)}
                >
                  <AppointmentsSvg
                    active={
                      appointment
                        ? "white"
                        : router.pathname === "/Doctor/Appointment"
                        ? "white"
                        : ""
                    }
                  />
                </div>
                <p>Appointments</p>
              </div>
            </Link>
          </div>
        </div>

        <div className={styles.menuBottom}>
          <Link href="/Doctor/Chat">
            <div className={styles.overView}>
              <div
                className={
                  chat
                    ? styles.active
                    : router.pathname === "/Doctor/Chat"
                    ? styles.active
                    : styles.overViewSvg
                }
                onMouseEnter={() => setChat((prev) => !prev)}
                onMouseLeave={() => setChat((prev) => !prev)}
              >
                <ChatSvg
                  active={
                    chat
                      ? "white"
                      : router.pathname === "/Doctor/Chat"
                      ? "white"
                      : ""
                  }
                />
              </div>
              <p>Chats</p>
            </div>
          </Link>
          <Link href="/Doctor/Financials">
            <div className={styles.overView}>
              <div
                className={
                  financials
                    ? styles.active
                    : router.pathname === "/Doctor/Financials"
                    ? styles.active
                    : styles.overViewSvg
                }
                onMouseEnter={() => setFinancials((prev) => !prev)}
                onMouseLeave={() => setFinancials((prev) => !prev)}
              >
                <Financialssvg
                  active={
                    financials
                      ? "white"
                      : router.pathname === "/Doctor/Financials"
                      ? "white"
                      : ""
                  }
                />
              </div>
              <p>Financials</p>
            </div>
          </Link>
        </div>
        <div className={styles.doctorsNotes}>
          <Link href="/Doctor/DoctorsNote">
            <div className={styles.overView}>
              <div
                className={
                  drNote
                    ? styles.active
                    : router.pathname === "/Doctor/DoctorsNote"
                    ? styles.active
                    : styles.overViewSvg
                }
                onMouseEnter={() => setDrNotes((prev) => !prev)}
                onMouseLeave={() => setDrNotes((prev) => !prev)}
              >
                <DoctorsNotesSvg
                  active={
                    drNote
                      ? "white"
                      : router.pathname === "/Doctor/DoctorsNote"
                      ? "white"
                      : ""
                  }
                />
              </div>
              <p>Doctors Notes</p>
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.appearanceCov}>
        <p className={styles.menuP}>APPEARANCE</p>
        <div className={styles.profileSettings}>
          <Link href="/Doctor/Profile">
            <div className={styles.overView}>
              <div
                className={
                  profileS
                    ? styles.active
                    : router.pathname === "/Doctor/Profile"
                    ? styles.active
                    : styles.overViewSvg
                }
                onMouseEnter={() => setProfileS((prev) => !prev)}
                onMouseLeave={() => setProfileS((prev) => !prev)}
              >
                <ProfileSvg
                  active={
                    profileS
                      ? "white"
                      : router.pathname === "/Doctor/Profile"
                      ? "white"
                      : ""
                  }
                />
              </div>
              <p>Profile</p>
            </div>
          </Link>

          <div className={styles.overView}>
            <div
              className={settings ? styles.active : styles.overViewSvg}
              onMouseEnter={() => setSettings((prev) => !prev)}
              onMouseLeave={() => setSettings((prev) => !prev)}
            >
              <SettingsSvg active={settings ? "white" : ""} />
            </div>
            <p>Settings</p>
          </div>
        </div>
        <div className={styles.profileSettings}>
          <div className={styles.overView}>
            <div
              className={questions ? styles.active : styles.overViewSvg}
              onMouseEnter={() => setQuestions((prev) => !prev)}
              onMouseLeave={() => setQuestions((prev) => !prev)}
            >
              <QuestionSvg active={questions ? "white" : ""} />
            </div>
            <p>Support</p>
          </div>
          <div className={styles.overView}>
            <div
              className={logout ? styles.active : styles.overViewSvg}
              onMouseEnter={() => setLogout((prev) => !prev)}
              onMouseLeave={() => setLogout((prev) => !prev)}
            >
              <LogoutSvg active={logout ? "white" : ""} />
            </div>
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
