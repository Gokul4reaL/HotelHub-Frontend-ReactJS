import React from "react";
import "./Awards.css"; // Import the CSS file with the styles
import { useNavigate } from "react-router-dom";

const Awards = () => {
  const navigate = useNavigate();

  return (
    <div className="awards-container">
      <div className="awards-card">
        <h3 className="awards-heading">Awards and Recognitions</h3>
        <p className="awards-description">
          We are proud to share the numerous awards and recognitions that
          HotelHub has received throughout our journey. These accolades reflect
          our unwavering commitment to excellence and innovation in the travel
          industry.
        </p>
        <div className="awards-list">
          <div className="award">
            <img src="/award1.png" alt="Award 1" className="award-image" />
            <p className="award-description">2022 Traveler's Choice Award</p>
          </div>
          <div className="award">
            <img src="/award2.png" alt="Award 2" className="award-image" />
            <p className="award-description">Best Online Travel Agency</p>
          </div>
          <div className="award">
            <img src="/award3.png" alt="Award 3" className="award-image" />
            <p className="award-description">Top Rated Booking Platform</p>
          </div>
          <div className="award">
            <img src="/award4.png" alt="Award 4" className="award-image" />
            <p className="award-description">
              Customer Satisfaction Excellence
            </p>
          </div>
        </div>
        <p className="awards-description">
          These awards are a testament to our dedication to providing you with
          the best travel experiences, top-notch customer service, and a
          platform that makes booking your dream accommodations easier than
          ever.
        </p>
        <button className="awards-button" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Awards;
