import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import "../styles/BookHotels.css";

const BookHotels = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [hotel, setHotel] = useState(null);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    checkInDate: "",
    checkOutDate: "", // Add a Check-Out Date field
    numRooms: 0,
    roomCost: 0,
  });

  useEffect(() => {
    if (location.state && location.state.hotel) {
      const selectedHotel = location.state.hotel;
      setHotel(selectedHotel);
      setFormData({
        ...formData,
        roomCost: selectedHotel.price,
      });
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRoomChange = (e) => {
    const { name, value } = e.target;
    const selectedRooms = parseInt(value, 10);

    if (selectedRooms > hotel.availableRooms) {
      setError("Number of rooms selected exceeds available rooms.");
    } else {
      setError("");
    }

    const roomCost = hotel ? hotel.price * selectedRooms : 0;
    setFormData({
      ...formData,
      [name]: selectedRooms,
      roomCost: roomCost,
    });
  };

  const handleBooking = (e) => {
    e.preventDefault();
    if (hotel) {
      // Parse and format the check-in and check-out dates
      const checkInDateParts = formData.checkInDate.split("-");
      const checkOutDateParts = formData.checkOutDate.split("-");

      const checkInDateFormatted = `${checkInDateParts[2]}-${checkInDateParts[1]}-${checkInDateParts[0]}`;
      const checkOutDateFormatted = `${checkOutDateParts[2]}-${checkOutDateParts[1]}-${checkOutDateParts[0]}`;

      navigate(`/explore/hotel/${hotel.id}/bookhotels/payment`, {
        state: {
          hotel: hotel,
          bookingDetails: {
            ...formData,
            checkInDate: formData.checkInDateFormatted, // Use the formatted date
            checkOutDate: formData.checkOutDateFormatted, // Use the formatted date
          },
          numRoomsBooked: formData.numRooms,
        },
      });
    }
  };

  return (
    <div>
      <Header />
      <div className="BookHotels">
        {hotel ? (
          <>
            <h2>Book Your Rooms At {hotel.name}</h2>
            <form onSubmit={handleBooking}>
              <div className="book-form-group">
                <label className="book-label" htmlFor="hotelName">
                  Hotel Name:
                </label>
                <input
                  className="book-input"
                  type="text"
                  id="hotelName"
                  name="hotelName"
                  value={hotel.name}
                  readOnly
                />
              </div>
              <div className="book-form-group">
                <label className="book-label" htmlFor="hotelLocation">
                  Hotel Location:
                </label>
                <input
                  className="book-input"
                  type="text"
                  id="hotelLocation"
                  name="hotelLocation"
                  value={hotel.location}
                  readOnly
                />
              </div>
              <div className="book-form-group">
                <label className="book-label" htmlFor="numRooms">
                  Number of Rooms ({hotel.availableRooms} available):
                </label>
                <input
                  className="book-input"
                  type="number"
                  id="numRooms"
                  name="numRooms"
                  value={formData.numRooms}
                  onChange={handleRoomChange}
                  min="0"
                />
              </div>
              {error && <p className="book-error-message">{error}</p>}
              <div className="book-form-group">
                <label className="book-label" htmlFor="roomCost">
                  Room Cost (per night): ₹{formData.roomCost}
                </label>
              </div>
              <br />
              <div className="book-form-group">
                <label className="book-label" htmlFor="checkInDate">
                  Check-In Date:
                </label>
                <input
                  className="book-input"
                  type="date"
                  id="checkInDate"
                  name="checkInDate"
                  value={formData.checkInDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="book-form-group">
                <label className="book-label" htmlFor="checkOutDate">
                  Check-Out Date:
                </label>
                <input
                  className="book-input"
                  type="date"
                  id="checkOutDate"
                  name="checkOutDate"
                  value={formData.checkOutDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="book-submit-button">
                Book Now
              </button>
            </form>
          </>
        ) : (
          <p className="book-error-message">Hotel data not found.</p>
        )}
      </div>
    </div>
  );
};

export default BookHotels;
