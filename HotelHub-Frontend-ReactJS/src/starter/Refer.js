import React from "react";
import { useNavigate } from "react-router-dom";
import "./Refer.css";

const ReferralProgram = () => {
  const navigate = useNavigate();

  return (
    <div className="referral-container-card">
      <div className="referral-card">
        <h3>Refer & Get Discounts</h3>
        <p>
          Our referral program allows you to earn exciting discounts on your
          hotel bookings while sharing your love for travel with friends and
          family. Here's how it works:
        </p>
        <div className="referral-rules">
          <h4>Referral Rules:</h4>
          <ul>
            <li>
              1. Refer a friend to sign up and create an account on HotelHub.
            </li>
            <li>2. Your friend makes their first booking using HotelHub.</li>
            <li>3. You both receive a discount on your next bookings:</li>
          </ul>
        </div>
        <div className="referral-rewards">
          <h4>Referral Rewards:</h4>
          <ul>
            <li>1. You get a 25% discount on your next booking.</li>
            <li>
              2. Your friend also receives a 25% discount on their first
              booking.
            </li>
            <li>
              3. As you continue to refer more friends, your discounts increase:
            </li>
            <ul>
              <li>2 friends referred: 30% discount</li>
              <li>3 friends referred: 35% discount</li>
              <li>4 or more friends referred: 40% discount</li>
            </ul>
          </ul>
        </div>
        <p>
          Start referring today and unlock incredible discounts for you and your
          friends. It's a win-win for everyone!
        </p>
        <div className="referral-back">
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default ReferralProgram;
