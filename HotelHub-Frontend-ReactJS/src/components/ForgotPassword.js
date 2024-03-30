import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/ForgotPassword.module.css"; // Import CSS module

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [resetLinkSent, setResetLinkSent] = useState(false);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSendResetLink = (e) => {
    e.preventDefault();
    // TODO: Send a reset password link to the provided email address
    // You can implement this functionality with your backend or using a service like Firebase
    // Once the link is sent successfully, set resetLinkSent to true
    setResetLinkSent(true);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    // TODO: Handle resetting the password using the reset link and the new password
    // You should validate the new password and confirm password here
    // If the password is reset successfully, you can set a success message
    setMessage("Password reset successfully.");

    navigate("/dashboard"); // Use navigate to redirect to the dashboard
  };

  if (resetLinkSent) {
    return (
      <div className={styles.container}>
        <h2>Reset Password</h2>
        <form onSubmit={handleResetPassword}>
          <div className="mb-3">
            <label htmlFor="newPassword" className={styles.formLabel}>
              New Password
            </label>
            <input
              type="password"
              className={`form-control ${styles.formControl}`}
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className={styles.formLabel}>
              Confirm New Password
            </label>
            <input
              type="password"
              className={`form-control ${styles.formControl}`}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className={`btn btn-primary ${styles.btnPrimary}`}
          >
            Reset Password
          </button>
        </form>
        <p>{message}</p>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <h2>Forgot Password</h2>
        <form onSubmit={handleSendResetLink}>
          <div className="mb-3">
            <label htmlFor="email" className={styles.formLabel}>
              Email
            </label>
            <input
              type="email"
              className={`form-control ${styles.formControl}`}
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className={`btn btn-primary ${styles.btnPrimary}`}
          >
            Send Reset Link
          </button>
        </form>
        <p>{message}</p>
      </div>
    );
  }
};

export default ForgotPassword;
