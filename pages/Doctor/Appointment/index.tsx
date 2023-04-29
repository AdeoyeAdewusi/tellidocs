import React from "react";
import styles from "./styles.module.css";
import DashLayout from "../../../components/DashLayout";
import { BsPlus } from "react-icons/bs";
import { RiSearch2Line } from "react-icons/ri";
import { AiOutlineCalendar, AiOutlineUnorderedList } from "react-icons/ai";
import { TbFileInvoice } from "react-icons/tb";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { MdOutlineCancel } from "react-icons/md";

const Appointment = () => {
  return (
    <DashLayout>
      <div className={styles.appointments}>
        <div className={styles.apponts}>
          <h1>Appointments</h1>
          <p>
            <span>ID number:</span> 032AI19O
          </p>
        </div>
        <div className={styles.setAppoint}>
          <p>
            <BsPlus className={styles.button} />
          </p>
          <p>SET APPOINTMENT AVAILABILITY</p>
        </div>
      </div>
      <div className={styles.filter}>
        <form className={styles.filterForm}>
          <div className={styles.searchFilter}>
            <div className={styles.searchbar}>
              <input type="text" placeholder="Search appointment" />
              <RiSearch2Line className={styles.searchLogo} />
            </div>
          </div>
          <div className={styles.mainFilters}>
            <select defaultValue="Filter By" className={styles.filterby}>
              <option value="volvo">Filter by</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <select defaultValue="Filter By" className={styles.filterby}>
              <option value="volvo">Weekly</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <div className={styles.listCalendar}>
              <div>
                <AiOutlineUnorderedList className={styles.fontColor} />
              </div>
              <hr className={styles.listHr} />
              <div>
                <AiOutlineCalendar className={styles.fontColor} />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className={styles.table}>
        {" "}
        <table>
          <thead>
            {" "}
            <tr>
              <th>Patient</th>
              <th>PHI number</th>
              <th>Date</th>
              <th>From</th>
              <th>To</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.prfile}>
                  <div className={styles.profileAppointmment}>
                    <img
                      src="/Assets/Images/ProfileImage.png"
                      width={24}
                      height={24}
                    />
                    <div className={styles.profileName}>
                      <p>Ajiboye Daniels</p>
                      <p>CONSULTATION</p>
                    </div>
                  </div>
                </div>
              </td>
              <td>218218490219</td>
              <td>Ajiboye Daniels</td>
              <td>₦2,500.00</td>
              <td>
                <div className={styles.pending}>Pending</div>
              </td>
              <td>
                {" "}
                <TbFileInvoice className={styles.fbinvoice} />
              </td>
              <td>
                <div className={styles.prfile}>
                  <div className={styles.checks}>
                    <HiOutlineCheckCircle style={{ color: "#5DB285" }} />
                    <MdOutlineCancel style={{ color: "#D36B6B" }} />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </DashLayout>
  );
};

export default Appointment;
