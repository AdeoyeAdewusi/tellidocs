import React, { useState } from "react";
import DashLayout from "../../../components/DashLayout";
import styles from "./styles.module.css";
import {
  appointments,
  consultation,
  doctorStats,
} from "../../../components/Data";
import InviteMailSvg from "../../../components/SVGs/inviteMailSvg";
import FaceBookColorSvg from "../../../components/SVGs/faceBookColorSvg";
import WhatsappColorSvg from "../../../components/SVGs/whatsappColorSvg";
import TwitterColorSvg from "../../../components/SVGs/twitterColorSvg";
import { useRouter } from "next/router";
import MoreInfo from "../../../components/MoreInfo";
const DashBoard = () => {
  const router = useRouter();
  const [showMoreInfoe, setShowMoreInfo] = useState(false);

  return (
    <DashLayout>
      <div>
        <h1 className={styles.welcome}>
          <span>Welcome</span> Dr. Feranmi
        </h1>
      </div>
      <div className={styles.patients}>
        <p>
          You have <span>7 patients</span> to attend to
        </p>
        <p>Remember to check documentation before call.</p>
      </div>
      <div className={styles.hoverOnDiv}>
        <div className={styles.hoverOn}>
          <p>Hover on the numbers for more details...</p>
        </div>
        <div className={styles.drStats}>
          {doctorStats.map((item, index) => {
            return (
              <div key={index} className={styles.stastsDoiv}>
                <div>
                  <p>{item.title}</p>
                </div>
                <div className={styles.num}>
                  <h2>{item.numbers}</h2>
                  <p>{item.currency}</p>
                </div>
                <hr className={styles.hr} />
                <div className={styles.point}>
                  <div>{item.point}</div>
                  <p>{item.stats}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.apointments}>
        <div className={styles.Todapointments}>
          <div className={styles.view}>
            <p>Today’s appointments</p>
            <p className={styles.viewAll}>VIEW ALL</p>
          </div>
          <div className={styles.consultOver}>
            {consultation.map((item, index) => {
              return (
                <>
                  <div
                    key={index}
                    onClick={() => setShowMoreInfo((prev) => !prev)}
                    className={styles.mainC}
                  >
                    <div className={styles.consult}>
                      <div className={styles.mainConsultDiv}>
                        <div>
                          <img src={item.image} width={20} height={20} />
                        </div>
                        <div className={styles.nmeConsult}>
                          <p>{item.name}</p>
                          <p className={styles.consul}>{item.consult}</p>
                        </div>
                      </div>
                      <div>
                        <p>{item.time}</p>
                      </div>
                    </div>
                    <hr className={styles.consultHr} />
                  </div>
                  {/* {item.moreInfo.map((itemm, index) => { */}
                  <MoreInfo
                    cancel={() => setShowMoreInfo((prev) => !prev)}
                    moreInfo={showMoreInfoe}
                    image={item.image}
                    dob={item.moreInfo.dob}
                    email={item.moreInfo.email}
                    name={item.name}
                    consult={item.consult}
                    gender={item.moreInfo.gender}
                    summary={item.moreInfo.summary}
                  />
                  {/* })} */}
                </>
              );
            })}
          </div>
        </div>

        <div className={styles.Todapointments}>
          <div className={styles.view}>
            <p>Appointment requests</p>
            <p className={styles.viewAll}>VIEW ALL</p>
          </div>
          <div className={styles.consultOver}>
            {appointments.map((item, index) => {
              return (
                <div key={index} className={styles.mainC}>
                  <div key={index} className={styles.consult}>
                    <div className={styles.mainConsultDiv}>
                      <div>
                        <img src={item.image} width={20} height={20} />
                      </div>
                      <div className={styles.nmeConsult}>
                        <p>{item.name}</p>
                        <p className={styles.consul}>{item.consult}</p>
                      </div>
                    </div>
                    <div className={styles.status}>
                      <div>{item.greenCheck}</div>
                      <div>{item.cancelCheck}</div>
                    </div>
                  </div>
                  <hr className={styles.consultHr} />
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.tips}>
          <div className={styles.tipSlide}></div>
          <div className={styles.invite}>
            <InviteMailSvg />
            <p className={styles.inviteP}>Invite a friend to Sanar today</p>
            <div className={styles.inviteSocials}>
              <FaceBookColorSvg />
              <WhatsappColorSvg />
              <TwitterColorSvg />
            </div>
          </div>
        </div>
      </div>
    </DashLayout>
  );
};

export default DashBoard;
