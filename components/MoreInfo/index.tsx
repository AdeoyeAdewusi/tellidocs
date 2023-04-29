import React from "react";
import styles from "./styles.module.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    height: "40%",
    width: "42%",
    color: "#3e3e3e",
    padding: "38px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    // backdropFilter: 'blur(28.8462px)',
    border: "none",
  },
  overlay: {
    backgroundColor: "papayawhip",
    zIndex: "4",
    background: "rgba(26, 26, 26, 0.5)",
    backdropFilter: "blur(4.8462px)",
  },
};

const MoreInfo = ({
  moreInfo,
  image,
  dob,
  email,
  name,
  consult,
  gender,
  summary,
  cancel,
}: {
  image: any;
  dob: any;
  email: any;
  name: any;
  consult: any;
  gender: any;
  summary: any;
  moreInfo: any;
  cancel: any;
}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // background.style.color = 'rgba(26, 26, 26, 0.5)';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className={moreInfo ? styles.moreInfo : styles.moreInforActive}>
      <div className={styles.topInfo}>
        <div className={styles.topInfoImg}>
          <div>
            {" "}
            <img src={image} width={20} height={20} />
          </div>
          <div className={styles.topBasicInfo}>
            <div className={styles.topName}>
              <p>{name}</p>
            </div>
            <div className={styles.topConsult}>
              <p>{consult}</p>
            </div>
            <div className={styles.topEmail}>
              <p>{email}</p>
            </div>
          </div>
        </div>
        <div onClick={cancel} className={styles.cancl}>
          X
        </div>
      </div>
      <div className={styles.dobGen}>
        <div className={styles.dob}>
          <p>Date Of Birth</p>
          <p>{dob}</p>
        </div>
        <div className={styles.dob}>
          <p>Gender</p>
          <p>{gender}</p>
        </div>
      </div>
      <div className={styles.purpose}>
        <p>Purpose of visit</p>
        <p>{summary}</p>
        <div className={styles.viewPatient}>
          <p>VIEW PATIENT’S FILE</p>
        </div>
      </div>
      <div className={styles.joinMessage}>
        <div>JOIN CALL</div>
        <div onClick={openModal}>MESSAGE</div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Doctors Modal"
        ariaHideApp={false}
      >
        <div style={{ width: "100%" }}>
          <div className={styles.modal}>
            <h1>Would you like to send an update message to {name}?</h1>
            <form>
              <textarea
                placeholder="Type here..."
                className={styles.textArea}
                cols={71}
                rows={8}
              ></textarea>
            </form>
          </div>
          <div className={styles.sendDontSend}>
            <div className={styles.donstSend}>
              <p>DON’T SEND</p>
            </div>
            <div className={styles.send}>
              <p>SEND</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MoreInfo;
