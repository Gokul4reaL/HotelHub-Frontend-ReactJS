import React from "react";
import styles from "../styles/SuccessPopup.module.css"; // Correct the import path and extension
const SuccessPopup = ({ onClose }) => {
  return (
    <div className={styles["popup-container"]}>
      <div className={styles["popup-content"]}>
        <h2 className={styles["popup-heading"]}>Login Successful</h2>
        <p className={styles["popup-text"]}>You have successfully logged in.</p>
        <button className={styles["popup-close-btn"]} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;
