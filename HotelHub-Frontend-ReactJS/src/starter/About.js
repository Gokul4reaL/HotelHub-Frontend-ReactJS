import React from "react";
import "./About.css";
import { useNavigate } from "react-router-dom"; // Import Link and useNavigate from react-router-dom

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className="about-container-card">
      <div className="about-card">
        <h3 className="about-heading">About HotelHub</h3>
        <p className="about-paragraph">
          Welcome to HotelHub, your gateway to unforgettable travel experiences!
          We are more than just a hotel booking agency; we are your trusted
          partner in creating remarkable journeys and memories that last a
          lifetime.
        </p>
        <p className="about-paragraph">
          At HotelHub, we are passionate about making your travel dreams a
          reality. Whether you're planning a relaxing getaway, a business trip,
          or an adventurous exploration, we've got you covered.
        </p>
        <p className="about-paragraph">
          What sets us apart is our dedication to providing the best hotel
          booking experience for travelers worldwide. We understand that every
          traveler is unique, and that's why we offer a diverse range of
          accommodation options to suit every taste and budget.
        </p>
        <p className="about-paragraph">
          Our mission is to simplify the travel planning process, offering you a
          seamless and enjoyable journey from the moment you start searching for
          your ideal hotel to the day you check out.
        </p>
        <p className="about-paragraph">
          Explore our handpicked selection of hotels in breathtaking
          destinations, discover exclusive offers and discounts, and let us take
          care of the details, so you can focus on creating cherished memories.
        </p>
        <p className="about-paragraph">
          Thank you for choosing HotelHub. We look forward to being a part of
          your incredible travel adventures!
        </p>
        <button className="about-button" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
