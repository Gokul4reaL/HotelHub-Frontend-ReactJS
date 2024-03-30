import React from "react";
import "./OurPartners.css"; // Import the CSS file with the styles
import { useNavigate } from "react-router-dom";

const OurPartners = () => {
  const navigate = useNavigate();
  return (
    <div className="partner-container">
      <div className="partner-card">
        <h3 className="partner-heading">Our Partners</h3>
        <p className="partner-description">
          At HotelHub, we take pride in our strong and extensive network of
          partners from around the world. These esteemed partners play a pivotal
          role in enhancing your travel experiences and ensuring that your
          journey is nothing short of extraordinary.
        </p>
        <p className="partner-description">
          Our partners include some of the most renowned hotel chains, boutique
          accommodations, airlines, travel agencies, and local service
          providers. We have carefully curated these partnerships to offer you
          the widest range of choices when it comes to planning your stay and
          exploring new destinations.
        </p>
        <p className="partner-description">
          What sets our partners apart is their unwavering commitment to
          quality, hospitality, and guest satisfaction. Whether you're seeking a
          luxurious retreat, a budget-friendly stay, or a unique cultural
          experience, our partners have you covered.
        </p>
        <p className="partner-description">
          As we continue to expand our network, you can expect even more
          options, exclusive deals, and special offers that will make your
          travel dreams a reality. We believe that every journey should be
          tailored to your preferences, and our partners share this belief,
          ensuring that your trips are as unique as you are.
        </p>
        <p className="partner-description">
          We are honored to collaborate with these exceptional partners, and we
          look forward to introducing you to a world of possibilities. Together,
          we aim to make your travels memorable, seamless, and filled with
          unforgettable moments.
        </p>
        <button className="partner-button" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
};

export default OurPartners;
