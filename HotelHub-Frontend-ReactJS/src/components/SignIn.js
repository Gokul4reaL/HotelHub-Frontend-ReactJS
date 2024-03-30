import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../styles/SignIn.module.css";
import SuccessPopup from "./SuccessPopup";
import { useUser } from "./UserContext";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(""); // State to store the JWT token
  const { updateUserEmail } = useUser();

  useEffect(() => {
    // Check if a token is already stored in local storage
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    try {
      // Make a POST request to your Spring Boot backend for user authentication
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/authenticate",
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        // Assuming the backend returns a JWT token
        const newToken = response.data.token;
        updateUserEmail(email);
        // Store the new token in local storage or a secure cookie
        localStorage.setItem("token", newToken);

        // Update the token state
        setToken(newToken);

        setIsSuccessPopupOpen(true);
      } else {
        setError("Authentication failed. Please check your credentials.");
      }
    } catch (error) {
      setError(
        "An error occurred while authenticating. Please try again later."
      );
    }
  };

  const closeSuccessPopup = () => {
    setIsSuccessPopupOpen(false);
    navigate("/dashboard");
  };

  return (
    <div className={styles["signin-container"]}>
      <h2 className={styles["signin-h2"]}>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className={styles["signin-form-label"]}>
            Email
          </label>
          <input
            type="text"
            className={`form-control ${styles["signin-form-control"]}`}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className={styles["signin-form-label"]}>
            Password
          </label>
          <input
            type="password"
            className={`form-control ${styles["signin-form-control"]}`}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className={`btn btn-primary ${styles["signin-btn-primary"]}`}
        >
          Sign In
        </button>
      </form>
      {error && (
        <div className={`${styles["error-message"]} mt-2`}>{error}</div>
      )}
      <br></br>
      <Link to="/forgot-password">
        <button
          type="button"
          className={`btn btn-primary forgot-password ${styles["signin-btn-primary"]}`}
        >
          Forgot Password?
        </button>
      </Link>
      {isSuccessPopupOpen && <SuccessPopup onClose={closeSuccessPopup} />}
    </div>
  );
};

export default SignIn;
