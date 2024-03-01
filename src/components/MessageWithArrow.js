import React from "react";
import styles from "./styles/MessageWithArrow.module.css";

const MessageWithArrow = ({ text }) => {
  return (
    <div className={styles.messageContainer}>
      <div className={styles.messageContent}>
        <p>{text}</p>
      </div>
      <div className={styles.arrow}></div>
    </div>
  );
};

export default MessageWithArrow;
