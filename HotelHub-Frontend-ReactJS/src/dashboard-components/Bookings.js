import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { useUser } from "../components/UserContext";
import "../styles/Bookings.css";

const Bookings = () => {
  const [userBookings, setUserBookings] = useState([]);
  const navigate = useNavigate();
  const { userEmail } = useUser();

  useEffect(() => {
    // Fetch user bookings based on userEmail
    axios
      .get(`http://localhost:8080/api/bookings/user/${userEmail}`)
      .then((response) => {
        setUserBookings(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user bookings:", error);
      });
  }, [userEmail]);

  const handleClick = (booking) => {
    navigate(`/explore/hotel/${booking.hotel.id}`, {
      state: { hotel: booking.hotel }, // Pass booking.hotel as the state
    });
  };

  const handleDeleteBooking = (booking) => {
    axios
      .delete(`http://localhost:8080/api/bookings/${booking.bookingId}`)
      .then((response) => {
        // Remove the deleted booking from userBookings
        const updatedBookings = userBookings.filter((b) => b.id !== booking.id);
        setUserBookings(updatedBookings);
        alert("Booking deleted successfully!");
      })
      .catch((error) => {
        console.error("Error deleting booking:", error);
        alert("Failed to delete booking. Please try again.");
      });
  };

  return (
    <div>
      <Header />
      <div>
        <Sidebar />
      </div>

      <h2>Booking History</h2>
      <div className="bookings-container">
        {userBookings.map((booking, index) => (
          <div className="booking-card" key={index}>
            <h3>Booking {index + 1}</h3>
            <p>Booking ID: {booking.bookingId}</p>
            <p>Hotel Name: {booking.hotel.name}</p>
            <p>Order ID: {booking.orderID}</p>
            <p>Total Amount: ₹{booking.costOfRooms}</p>
            <p>Location: {booking.hotel.location}</p>
            <p>Number of Rooms: {booking.numberOfRooms}</p>
            <p>User Email: {booking.userEmail}</p>
            <p>Hotel ID: {booking.hotel.id}</p>
            <div className="view-hotel-button-container">
              <button
                className="view-hotel-booking-button"
                onClick={() => handleClick(booking)}
              >
                View Hotel
              </button>
            </div>
            <div>
              <button
                className="delete-booking-button"
                onClick={() => handleDeleteBooking(booking)}
              >
                Delete Booking
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
