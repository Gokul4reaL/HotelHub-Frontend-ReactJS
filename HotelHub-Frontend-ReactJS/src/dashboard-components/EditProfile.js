import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import "../styles/EditProfile.css";
import Navbar from "../components/Navbar";
import { useUser } from "../components/UserContext";

const EditProfile = () => {
  const navigate = useNavigate();
  const { userEmail } = useUser();

  // Use local state to manage the edited user data
  const [editedUserData, setEditedUserData] = useState({});

  // Use the useEffect hook to fetch user data when the component mounts
  useEffect(() => {
    // Fetch user data based on the userEmail
    axios
      .get("http://localhost:8080/api/v1/view-profile?email=" + userEmail)
      .then((response) => {
        const userData = response.data;
        setEditedUserData(userData);
      });
  }, [userEmail]);

  const handleDeleteAccount = () => {
    const confirmation = window.confirm(
      "Are you sure you want to delete your account? This action is irreversible."
    );

    if (confirmation) {
      // Make a request to delete the user's account
      axios
        .delete(
          "http://localhost:8080/api/v1/delete-profile?email=" + userEmail
        )
        .then((response) => {
          if (response.status === 204) {
            // Account deleted successfully, navigate to a relevant page (e.g., login)
            alert("Account deleted successfully");
            navigate("/");
          } else if (response.status === 404) {
            // User not found, show an error message
            alert("User not found");
          } else {
            // Handle other response statuses as needed
          }
        })
        .catch((error) => {
          console.error("Error deleting account:", error);
        });
    }
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    // Make a request to update the user profile
    axios
      .put(
        "http://localhost:8080/api/v1/update-profile?email=" + userEmail,
        editedUserData
      )
      .then((response) => {
        if (response.status === 200) {
          // Profile updated successfully, show a success message
          alert("Profile updated successfully");
          navigate("/view-profile");
        } else if (response.status === 409) {
          // User not found, show an error message
          alert("User not found");
        } else {
          // Handle other response statuses as needed
        }
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

  return (
    <div>
      <Header />
      <Navbar />
      <br></br>
      <h2>Edit Profile</h2>
      <form onSubmit={handleUpdateProfile}>
        <div className="input-row">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            className="edit-input"
            value={editedUserData.firstName}
            onChange={(e) =>
              setEditedUserData({
                ...editedUserData,
                firstName: e.target.value,
              })
            }
          />
        </div>
        <div className="input-row">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            className="edit-input"
            value={editedUserData.lastName}
            onChange={(e) =>
              setEditedUserData({
                ...editedUserData,
                lastName: e.target.value,
              })
            }
          />
        </div>
        <div className="input-row">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            className="edit-input"
            value={editedUserData.age}
            onChange={(e) =>
              setEditedUserData({ ...editedUserData, age: e.target.value })
            }
          />
        </div>
        <div className="input-row">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            className="edit-input"
            value={editedUserData.phone}
            onChange={(e) =>
              setEditedUserData({
                ...editedUserData,
                phone: e.target.value,
              })
            }
          />
        </div>
        <div className="input-row">
          <label htmlFor="username">Country</label>
          <input
            type="text"
            id="username"
            className="edit-input"
            value={editedUserData.country}
            onChange={(e) =>
              setEditedUserData({
                ...editedUserData,
                country: e.target.value,
              })
            }
          />
        </div>
        <div className="input-row">
          <label htmlFor="gender">Gender</label>
          <input
            type="text"
            id="gender"
            className="edit-input"
            value={editedUserData.gender}
            onChange={(e) =>
              setEditedUserData({
                ...editedUserData,
                gender: e.target.value,
              })
            }
          />
        </div>
        <div className="input-row">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            className="edit-input"
            value={editedUserData.city}
            onChange={(e) =>
              setEditedUserData({
                ...editedUserData,
                city: e.target.value,
              })
            }
          />
        </div>
        <br></br>

        <div>
          {" "}
          {/* Add similar input fields for other user data */}
          <button type="submit" className="save-button">
            Save Changes
          </button>
        </div>
        <br></br>
        <div>
          <button onClick={handleDeleteAccount} className="save-button">
            Delete My Account
          </button>
        </div>
      </form>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
};

export default EditProfile;
