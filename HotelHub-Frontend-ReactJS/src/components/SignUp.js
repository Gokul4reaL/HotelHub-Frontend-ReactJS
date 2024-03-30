import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/SignUp.module.css";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "Male",
    city: "",
    email: "",
    phone: "",
    country: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      age,
      gender,
      city,
      email,
      phone,
      country,
      password,
    } = formData;

    if (!passwordsMatch) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      // Remove confirmPassword from the data being sent to the backend
      const { confirmPassword, ...dataToSend } = formData;

      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        dataToSend
      );

      if (response.status === 200) {
        navigate("/signin");
      } else {
        setErrorMessage("Registration failed. Please check your information.");
      }
    } catch (error) {
      setErrorMessage(
        "An error occurred during registration. Please try again later."
      );
    }
  };

  const handlePasswordChange = (e) => {
    const confirmPassword = e.target.value;
    setPasswordsMatch(formData.password === confirmPassword);
  };

  return (
    <div className={styles["signup-container"]}>
      <h2 className={styles["signup-h2"]}>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="row">
          <div className="col-md-6">
            <div className={`mb-3 ${styles["signup-form-control"]}`}>
              <label className={styles["signup-label"]}>First Name:</label>
              <input
                type="text"
                className="form-control"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                required
              />
            </div>
            <div className={`mb-3 ${styles["signup-form-control"]}`}>
              <label className={styles["signup-label"]}>Email:</label>
              <input
                type="email"
                className="form-control"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div className={`mb-3 ${styles["signup-form-control"]}`}>
              <label className={styles["signup-label"]}>Age:</label>
              <input
                type="number"
                className="form-control"
                value={formData.age}
                onChange={(e) =>
                  setFormData({ ...formData, age: e.target.value })
                }
                required
              />
            </div>
            <div className={`mb-3 ${styles["signup-form-control"]}`}>
              <label className={styles["signup-label"]}>City:</label>
              <input
                type="text"
                className="form-control"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className={`mb-3 ${styles["signup-form-control"]}`}>
              <label className={styles["signup-label"]}>Last Name:</label>
              <input
                type="text"
                className="form-control"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                required
              />
            </div>
            <div className={`mb-3 ${styles["signup-form-control"]}`}>
              <label className={styles["signup-label"]}>Phone Number:</label>
              <input
                type="tel"
                className="form-control"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
              />
            </div>

            <div className={`mb-3 ${styles["signup-form-control"]}`}>
              <label className={styles["signup-label"]}>Gender:</label>
              <select
                className="form-control"
                value={formData.gender}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
                required
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className={`mb-3 ${styles["signup-form-control"]}`}>
              <label className={styles["signup-label"]}>Country</label>
              <input
                type="text"
                className="form-control"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className={`mb-3 ${styles["signup-form-control"]}`}>
              <label className={styles["signup-label"]}>Password:</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col">
            <div className={`mb-3 ${styles["signup-form-control"]}`}>
              <label className={styles["signup-label"]}>
                Re-enter Password:
              </label>
              <input
                type="password"
                className={`form-control ${passwordsMatch ? "" : "is-invalid"}`}
                name="confirmPassword"
                onChange={handlePasswordChange}
                required
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          disabled={!passwordsMatch}
          className={`btn btn-primary ${styles["signup-btn-primary"]}`}
        >
          Sign Up
        </button>
        {!passwordsMatch && (
          <div className="text-danger mt-2 text-white">
            Passwords do not match.
          </div>
        )}
        {errorMessage && (
          <div className="text-danger mt-2 text-white">{errorMessage}</div>
        )}
      </form>
    </div>
  );
};

export default SignUp;
