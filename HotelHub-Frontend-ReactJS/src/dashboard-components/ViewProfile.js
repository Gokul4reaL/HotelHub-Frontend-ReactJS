import React, { useEffect, useState } from "react";
import "../styles/ViewProfile.css"; // Import the CSS file for styling
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Navbar from "../components/Navbar";
import { useUser } from "../components/UserContext";

const ViewProfile = () => {
  // userData should be an object containing user details
  const [viewProfile, setViewProfile] = useState(null);
  const { userEmail } = useUser();

  useEffect(() => {
    // Make an HTTP GET request to fetch the user profile
    axios
      .get("http://localhost:8080/api/v1/view-profile?email=" + userEmail)
      .then((response) => {
        setViewProfile(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  });

  return (
    <div className="view-profile-container">
      <Header />
      <Navbar />
      <br></br>
      <div className="profile-details">
        {viewProfile !== null && (
          <div className="user-details">
            <h2>User Details</h2>
            <ul>
              <li>
                <strong>First Name:</strong> {viewProfile.firstName}
              </li>
              <li>
                <strong>Last Name:</strong> {viewProfile.lastName}
              </li>
              <li>
                <strong>Age:</strong> {viewProfile.age}
              </li>
              <li>
                <strong>Email:</strong> {viewProfile.email}
              </li>
              <li>
                <strong>Phone Number:</strong> {viewProfile.phone}
              </li>
              <li>
                <strong>Gender:</strong> {viewProfile.gender}
              </li>
              <li>
                <strong>City:</strong> {viewProfile.city}
              </li>
              <li>
                <strong>Country: </strong>
                {viewProfile.country}
              </li>
              {/* Add more user details here */}
            </ul>
          </div>
        )}
      </div>
      <div className="button-container">
        <Link to="/dashboard" className="back-to-dashboard-button">
          Back to Dashboard
        </Link>
      </div>
      <div className="button-container">
        {/* Link to EditProfile component */}
        <Link to="/edit-profile" className="edit-profile-button">
          Edit Profile
        </Link>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default ViewProfile;
