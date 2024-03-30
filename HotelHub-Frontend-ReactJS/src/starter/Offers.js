import React from "react";
import "./Offers.css";
import { useNavigate } from "react-router-dom";

const OngoingOffers = () => {
  const navigate = useNavigate();

  // Sample hotel offers data
  const hotelOffers = [
    {
      title: "Summer Getaway",
      description:
        "Book your summer vacation and get 20% off at select hotels.",
    },
    {
      title: "Weekend Escape",
      description: "Enjoy a relaxing weekend and save 15% on weekend bookings.",
    },
    {
      title: "Family Fun Package",
      description:
        "Plan a family trip and receive complimentary breakfast for kids.",
    },
    {
      title: "Business Traveler Special",
      description: "Business travelers can get 10% off on weekday stays.",
    },
  ];

  return (
    <div className="ongoing-offers-container-card">
      <div className="ongoing-offers-card">
        <h3 className="ongoing-offers-title">Ongoing Offers</h3>
        <p className="ongoing-offers-description">
          Check out our latest offers and discounts on hotel bookings. Whether
          you're planning a summer getaway, a weekend escape, a family trip, or
          a business trip, we have exclusive offers tailored just for you.
        </p>
        <div className="offer-cards">
          {hotelOffers.map((offer, index) => (
            <div className="offer-card" key={index}>
              <h4 className="offer-title">{offer.title}</h4>
              <p className="offer-description">{offer.description}</p>
            </div>
          ))}
        </div>
        <br></br>
        <div>
          <button className="partner-button" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default OngoingOffers;
