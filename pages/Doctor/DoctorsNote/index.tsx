import React, { useState } from "react";
import DashLayout from "../../../components/DashLayout";
import styles from "./styles.module.css";
import { TbFileInvoice } from "react-icons/tb";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { MdOutlineCancel } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";

const DoctorsNotes = () => {
  const [moredetails, setMredetails] = useState(true);
  return (
    <DashLayout>
      {moredetails ? (
        <>
          <div className={styles.ntes}>
            <h1>Doctor’s note</h1>
          </div>
          <div className={styles.table}>
            {" "}
            <table>
              <thead>
                {" "}
                <tr>
                  <th>Patients name</th>
                  <th>PHI number</th>
                  <th>Appointment date & time</th>
                  <th>Diagnosis</th>
                  <th>Prescription</th>
                </tr>
              </thead>
              <tbody onClick={() => setMredetails((prev) => !prev)}>
                <tr>
                  <td>Ajiboye Daniels</td>
                  <td>129402020</td>
                  <td>21st February 2021 08:00AM-09:00AM</td>
                  <td>Acute meningitis</td>
                  <td>Klorophineol</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>Ajiboye Daniels</td>
                  <td>129402020</td>
                  <td>21st February 2021 08:00AM-09:00AM</td>
                  <td>
                    <div className={styles.pending}>Pending</div>
                  </td>
                  <td>
                    <div className={styles.pending}>Pending</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className={styles.details}>
              <BsArrowLeft onClick={() => setMredetails((prev) => !prev)} />
              <p>Details</p>
            </div>
            <div className={styles.detailsImg}>
              <img
                src="/Assets/Images/ProfileImage.png"
                width={44}
                height={44}
              />
              <div className={styles.detsName}>
                <p>Ajiboye Daniels</p>
                <p>CONSULTATION</p>
                <p>PHI number: 1329893230</p>
              </div>
            </div>
          </div>

          <div className={styles.fullDetails}>
            <div className={styles.fullDetailsLft}>
              <div>
                <h1>Diagnosis</h1>
                <p>
                  Libero habitant donec velit nec sit enim, enim curabitur. Eu
                  porttitor odio in mi sed mauris sapien elit. Et in ut vel,
                  Libero habitant donec velit nec sit enim, enim curabitur. Eu
                  porttitor odio in mi sed mauris sapien elit. Et in ut vel,
                  Libero habitant donec velit nec sit enim, enim curabitur. Eu
                  porttitor odio in mi sed mauris sapien elit. Et in ut vel,{" "}
                </p>
              </div>
              <div>
                <h1>Patient’s details</h1>
                <div className={styles.patientDets}>
                  <div className={styles.patientDetslft}>
                    <p>Phone number:</p>
                    <p>Email address:</p>
                    <p>Date of birth:</p>
                    <p>Country:</p>
                    <p>State:</p>
                  </div>
                  <div className={styles.patientDetsrgt}>
                    <p> +234 812 908 6629</p>

                    <p>feranmiolowo15@gmailcom </p>
                    <p>February 1997</p>
                    <p>Nigeria</p>
                    <p>Lagos</p>
                  </div>
                </div>
              </div>
              <div>
                <h1>Vitals</h1>
                <div className={styles.vits}>
                  <div className={styles.vitalsa}>
                    <p>Height</p>
                    <p>Weight</p>
                    <p>Blood sugar</p>
                  </div>
                  <div className={styles.vitalsDets}>
                    <p>5’6’’</p>
                    <p>92lbs</p>
                    <p>6mmol/L</p>
                  </div>
                </div>
              </div>
              <div>
                <h1>Medical History</h1>
                <div>
                  <h2>Any previous treatment or sickness?</h2>
                  <p>
                    Libero habitant donec velit nec sit enim, enim curabitur. Eu
                    porttitor odio in mi sed mauris sapien elit. Et in ut vel,{" "}
                  </p>
                </div>
                <div>
                  <h2>Any previous treatment or sickness?</h2>
                  <p>
                    Libero habitant donec velit nec sit enim, enim curabitur. Eu
                    porttitor odio in mi sed mauris sapien elit. Et in ut vel,{" "}
                  </p>
                </div>
                <div>
                  <h2>Any previous treatment or sickness?</h2>
                  <p>
                    Libero habitant donec velit nec sit enim, enim curabitur. Eu
                    porttitor odio in mi sed mauris sapien elit. Et in ut vel,{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.fullDetailsRght}>
              <div>
                <h1>Prescription</h1>
                <ul>
                  <li>Ibuprofen</li>
                  <li>Biotin</li>
                  <li>Paracetamol</li>
                </ul>
              </div>
              <div>
                <h1>Comments/Suggestions</h1>
                <p>
                  Libero habitant donec velit nec sit enim, enim curabitur. Eu
                  porttitor odio in mi sed mauris sapien elit. Et in ut vel,
                  Libero habitant donec velit nec sit enim, enim curabitur. Eu
                  porttitor odio in mi sed mauris sapien elit. Et in ut vel,{" "}
                </p>
              </div>
              <div>
                <h1>Appointment details</h1>
                <ul>
                  <li>Friday, 12 June 2021</li>
                  <li>08:00AM - 09:00AM</li>
                  <li>10 minutes before</li>
                </ul>
              </div>
              <div>
                <h1>Purpose of Visit</h1>
                <p>
                  Libero habitant donec velit nec sit enim, enim curabitur. Eu
                  porttitor odio in mi sed mauris sapien elit. Et in ut vel,{" "}
                </p>
              </div>
              <div>
                <h1>Documents</h1>
                <ul>
                  <li>
                    <div></div>
                    <div></div>
                  </li>
                </ul>
              </div>
              <div>
                <h1>Symptoms</h1>
                <p>
                  Libero habitant donec velit nec sit enim, enim curabitur.{" "}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </DashLayout>
  );
};

export default DoctorsNotes;
