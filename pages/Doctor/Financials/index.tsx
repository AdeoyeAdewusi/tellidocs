import React from "react";
import styles from "./styles.module.css";
import DashLayout from "../../../components/DashLayout";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { TbFileInvoice } from "react-icons/tb";

const Financials = () => {
  return (
    <DashLayout>
      <div>
        <div className={styles.cards}>
          <div className={styles.cardData}>
            <div className={styles.cardDataNumbers}>
              <p>Revenue</p>
              <h1>324,000</h1>
              <hr className={styles.hr} />
              <p className={styles.second}>
                <BsArrowDown style={{ color: "red" }} />
                3.28% this week
              </p>
            </div>
            <hr className={styles.divide} />
            <div className={styles.cardDataNumbers}>
              <p>Revenue</p>
              <h1>324,000</h1>
              <hr className={styles.hr} />
              <p className={styles.second}>
                <BsArrowUp style={{ color: "#28A138" }} />
                3.28% this week
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.sctInfo}>
              <p>Account No.</p>
              <p>021***4920</p>
            </div>
            <div className={styles.sctInfo}>
              <p>Bank Name</p>
              <p>Gtbank</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.table}>
        {" "}
        <table>
          <thead>
            <tr>
              <th>Transaction date</th>
              <th>Transaction number</th>
              <th>Patient name</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Invoice</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>21st February,2021</td>
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
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>21st February,2021</td>
              <td>218218490219</td>
              <td>Ajiboye Daniels</td>
              <td>₦2,500.00</td>
              <td>
                <div className={styles.completed}>Pending</div>
              </td>
              <td>
                {" "}
                <TbFileInvoice className={styles.fbinvoice} />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>21st February,2021</td>
              <td>218218490219</td>
              <td>Ajiboye Daniels</td>
              <td>₦2,500.00</td>
              <td>
                <div className={styles.completed}>Pending</div>
              </td>
              <td>
                <TbFileInvoice className={styles.fbinvoice} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </DashLayout>
  );
};

export default Financials;
