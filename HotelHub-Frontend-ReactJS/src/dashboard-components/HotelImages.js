import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/HotelImages.css"; // Import your custom CSS file for styling
import "../styles/HotelDetails.css"; // Import your CSS file with button styling

const HotelImages = () => {
  const location = useLocation();
  const hotel = location.state.hotel;
  const navigate = useNavigate();

  const handleGoBack = () => {
    // Navigate back to the previous page when the "Back" button is clicked
    navigate(-1);
  };

  if (!hotel || !hotel.images || hotel.images.length === 0) {
    // Handle the case where hotel data or images are not available
    return <div>No hotel data or images available.</div>;
  }

  return (
    <div>
      <Header />
      <h2>{hotel.name} Images</h2>
      <Carousel className="image-carousel">
        {hotel.images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Hotel Image ${index + 1}`}
              className="carousel-image"
            />
          </div>
        ))}
      </Carousel>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button className="hotel-button" onClick={handleGoBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default HotelImages;
