import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/HotelDetails.css";

const CompareHotels = ({
  currentHotel,
  hotelsToCompare,
  showCompareHotels,
}) => {
  const navigate = useNavigate(); // Initialize navigate hook

  // Calculate the price difference for each hotel
  const hotelsWithPriceDifference = hotelsToCompare.map((hotel) => ({
    ...hotel,
    priceDifference: hotel.price - currentHotel.price,
  }));

  // Sort hotels by price difference in ascending order
  const sortedHotels = hotelsWithPriceDifference.sort(
    (a, b) => a.priceDifference - b.priceDifference
  );

  // Define the number of hotels to display initially and when "Show More" is clicked
  const hotelsPerPage = 5;
  const [displayedHotels, setDisplayedHotels] = useState(
    sortedHotels.slice(0, hotelsPerPage)
  );

  // Function to show more hotels
  const handleShowMore = () => {
    const currentCount = displayedHotels.length;
    const newCount = currentCount + hotelsPerPage;
    setDisplayedHotels(sortedHotels.slice(0, newCount));
  };

  return (
    <Container className="mt-4">
      <h2>Compare Hotels</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {displayedHotels.map((hotel) => (
          <Col key={hotel.id}>
            <Card className="compare-hotel-card">
              <Card.Body>
                <Card.Title>{hotel.name}</Card.Title>
                <Card.Text>Location: {hotel.location}</Card.Text>
                <Card.Text>Rating: {hotel.rating}</Card.Text>
                <Card.Text>Available Rooms: {hotel.availableRooms}</Card.Text>
                <Card.Text>Description: {hotel.description}</Card.Text>
                <Card.Text>Price: ₹{hotel.price}</Card.Text>
                <Card.Text>
                  Price Difference: ₹{hotel.priceDifference}
                </Card.Text>
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "20px",
                  }}
                >
                  <button
                    className="compare-view-button"
                    onClick={() => {
                      // Navigate to HotelDetails page with the same three buttons
                      navigate(`/explore/hotel/${hotel.id}`, {
                        state: { hotel },
                      });

                      // Toggle the visibility of CompareHotels component
                      showCompareHotels(false);
                    }}
                  >
                    View
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {displayedHotels.length < sortedHotels.length && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button className="hotel-button" onClick={handleShowMore}>
            Show More
          </button>
        </div>
      )}
    </Container>
  );
};

CompareHotels.propTypes = {
  currentHotel: PropTypes.object.isRequired,
  hotelsToCompare: PropTypes.array.isRequired,
  showCompareHotels: PropTypes.func.isRequired, // Function to toggle visibility
};

export default CompareHotels;
