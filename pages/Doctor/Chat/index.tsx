import React from "react";
import DashLayout from "../../../components/DashLayout";
import styles from "./styles.module.css";
import { AiOutlineArrowUp, AiOutlineSearch } from "react-icons/ai";
import ChatFileSvg from "../../../components/SVGs/fchatFileSvg";
import ChatmojiSvg from "../../../components/SVGs/chatmojiSvg";

const Chat = () => {
  return (
    <DashLayout>
      <div className={styles.chat}>
        <div className={styles.allCHat}>
          <div className={styles.chatTop}>
            <p>Chat</p>
            <div>+</div>
          </div>
          <form className={styles.chatFormm}>
            <input className={styles.search} type="text" />
            <AiOutlineSearch className={styles.aiSearch} />
          </form>
          <div className={styles.mainChats}>
            <div className={styles.chatImg}>
              <img
                src="/Assets/Images/ProfileImage.png"
                height={30}
                width={30}
              />
              <div className={styles.nameChat}>
                <p>Feranmi Olowookere</p>
                <p>Are you available today?</p>
              </div>
            </div>
            <p className={styles.now}>Now</p>
          </div>
        </div>
        <div className={styles.openChat}>
          <div className={styles.name}>
            <p>Timi Godfrey</p>
            <p>Reply to message</p>
          </div>
          <div className={styles.msgArea}>
            <div className={styles.sent}>
              <p className={styles.chatName}>Timi Godfrey</p>
              <div>
                <p>Good morning doctor. How are you doing?</p>
              </div>
              <p className={styles.chatTime}>01:55PM</p>
            </div>
            <div className={styles.recieve}>
              <p className={styles.chatName}>Timi Godfrey</p>
              <div>
                <p>Good morning doctor. How are you doing?</p>
              </div>
              <p className={styles.chatTime}>01:55PM</p>
            </div>
          </div>
          <div className={styles.sendMsg}>
            <form>
              <input
                className={styles.msgBox}
                placeholder="Type your message here..."
                type="text"
              />
            </form>
            <div className={styles.emojiFile}>
              <ChatFileSvg />
              <ChatmojiSvg />
            </div>
            <div className={styles.sendBtn}>
              <AiOutlineArrowUp />
            </div>
          </div>
        </div>
      </div>
    </DashLayout>
  );
};

export default Chat;
