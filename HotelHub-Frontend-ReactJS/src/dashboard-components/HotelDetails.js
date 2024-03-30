import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../styles/HotelDetails.css"; // Make sure to import your CSS file
import CompareHotels from "./CompareHotels"; // Import the CompareHotels component
import Navbar from "../components/Navbar";
import axios from "axios";

const HotelDetails = () => {
  const location = useLocation();
  const hotel = location.state.hotel;
  const navigate = useNavigate();
  const [showImages, setShowImages] = useState(false);
  const [showCompare, setShowCompare] = useState(false);
  const [hotelsData, setHotelsData] = useState([]); // State to store hotel data

  useEffect(() => {
    // Make an API request to fetch the list of hotels from your backend
    axios.get("http://localhost:8080/api/v1/hotels").then((response) => {
      setHotelsData(response.data);
    });
  }, []); //
  if (!hotel) {
    // Handle the case where hotel data is not available
    return <div>No hotel data available.</div>;
  }

  const handleShowImages = () => {
    setShowImages(true);
    navigate(`/explore/hotel/${hotel.id}/images`, {
      state: { hotel },
    });
    // You can add code here to display the hotel images when the button is clicked.
  };

  const handleCompareHotels = () => {
    setShowCompare(!showCompare); // Toggle the visibility of CompareHotels component
    // You can add code here to gather a list of hotels with similar prices for comparison
  };

  const handleBackToExplore = () => {
    // Navigate back to the previous page
    navigate(-1);
  };

  const handleBookRooms = () => {
    // Navigate to the booking page when "Book Rooms" is clicked
    navigate(`/explore/hotel/${hotel.id}/bookhotels`, {
      state: {
        hotel: hotel, // Pass the selected hotel data
      },
    }); // Update the route to your booking page
  };

  return (
    <div>
      <Header />
      <Navbar />
      <br></br>
      <div className="HotelDetails">
        <h2>{hotel.name}</h2>
        <div className="hotel-explore-container">
          <div className="hotel-explore-card">
            <p>Location: {hotel.location}</p>
          </div>
          <div className="hotel-explore-card">
            <p>Available Rooms: {hotel.availableRooms}</p>
          </div>
          <div className="hotel-explore-card">
            <p>Price: ₹{hotel.price}</p>
          </div>
          <div className="hotel-explore-card">
            <p>Rating: {hotel.rating}</p>
          </div>
          <div className="hotel-explore-card">
            <p>Description: {hotel.description}</p>
          </div>
        </div>
        {/* Add a button to show hotel images */}
        <div className="hotel-button-container">
          <button className="hotel-button" onClick={handleShowImages}>
            Click to See Hotel Images
          </button>
        </div>
        <div className="additional-buttons">
          <button className="additional-button" onClick={handleBookRooms}>
            Book Rooms
          </button>
          <button className="additional-button" onClick={handleCompareHotels}>
            {showCompare ? "Hide Compare" : "Compare Hotels"}
          </button>
          <button className="additional-button" onClick={handleBackToExplore}>
            Back
          </button>
        </div>
      </div>

      {showCompare && (
        <div className="compare-hotels-container">
          <CompareHotels
            currentHotel={hotel}
            hotelsToCompare={hotelsData}
            showCompareHotels={setShowCompare} // Pass the toggle function
          />
        </div>
      )}
    </div>
  );
};

export default HotelDetails;
