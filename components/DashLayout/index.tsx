import React from "react";
import SideBar from "./SideBar";
import TopNav from "./TopNav";
import styles from "./styles.module.css";

const DashLayout = ({ children }: { children: any }) => {
  return (
    <>
      <SideBar />
      <div className={styles.lay}>{children}</div>
      <TopNav />
    </>
  );
};

export default DashLayout;
