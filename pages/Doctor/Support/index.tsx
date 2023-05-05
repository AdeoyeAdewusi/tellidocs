import React from "react";
import DashLayout from "../../../components/DashLayout";
import styles from "./styles.module.css";
import Button from "../../../components/Button";
import { BiSearchAlt2 } from "react-icons/bi";
import GettingStartedSvg from "../../../components/SVGs/gettingStartedSvg";
import CalenderSvg from "../../../components/SVGs/calenderSvg";
import DoctorSupportSvg from "../../../components/SVGs/doctorSupportSvg";
import ProfileSupportSvg from "../../../components/SVGs/profileSupportSvg";
import OrdersSupportSvg from "../../../components/SVGs/ordersSupportSvg";
import PaymentSupportSvg from "../../../components/SVGs/paymentSupportSvg";
const Support = () => {
  return (
    <DashLayout>
      <div className={styles.inputText}>
        <div className={styles.src}>
          <BiSearchAlt2 className={styles.search} />
          <input type="text" placeholder="Search help articles" />
        </div>
        <div>
          <Button text="CONTACT US" />
        </div>
      </div>
      <div className={styles.supportFlex}>
        <div className={styles.SupportCOntent}>
          <div>
            <GettingStartedSvg />
            <h1>Getting started</h1>
            <p>How can I register my family member?</p>
            <p>How do I book an appointment?</p>
            <p>I need to complete my profile</p>
            <span>View All</span>
          </div>
          <div>
            <CalenderSvg />
            <h1>Appointments</h1>
            <p>Can I book a recurring meeting?</p>
            <p>How can I see my doctor now?</p>
            <p>Can I know doctors that are available?</p>
            <span>View All</span>
          </div>
          <div>
            <DoctorSupportSvg />
            <h1>Doctors</h1>
            <p>Can I invite my doctor here?</p>
            <p>Which doctors are available?</p>
            <p>Are your doctors certified?</p>
            <span>View All</span>
          </div>
        </div>
        <div className={styles.SupportCOntent}>
          <div>
            <ProfileSupportSvg />
            <h1>Profile</h1>
            <p>Profile verification</p>
            <p>Completing my profile</p>
            <p>Can I upload my medical documents?</p>
            <span>View All</span>
          </div>
          <div>
            <OrdersSupportSvg />
            <h1>Orders</h1>
            <p>Processing orders</p>
            <p>When do I receive my order?</p>
            <p>Are your drugs registered?</p>
            <span>View All</span>
          </div>
          <div>
            <PaymentSupportSvg />
            <h1>Payments</h1>
            <p>Card payments</p>
            <p>Declined transactions</p>
            <p>Top-up</p>
            <span>View All</span>
          </div>
        </div>
      </div>
    </DashLayout>
  );
};

export default Support;
