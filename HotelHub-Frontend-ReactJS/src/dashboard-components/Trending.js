import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../styles/Trending.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

// Import your dataset of favorite hotels
import hotelsData from "../hotelsData"; // Replace with the actual path to your dataset

const Trending = () => {
  // State to track the currently displayed hotels
  const [displayedHotels, setDisplayedHotels] = useState([]);
  const navigate = useNavigate();

  // State to track the number of hotels to load each time
  const hotelsToLoad = 10;

  // Function to sort hotels by ratings in descending order
  const sortHotelsByRating = () => {
    const sortedHotels = [...hotelsData].sort((a, b) => b.rating - a.rating);
    return sortedHotels;
  };

  // Function to load more hotels
  const loadMoreHotels = () => {
    const currentLength = displayedHotels.length;
    const sortedHotels = sortHotelsByRating();
    const nextHotels = sortedHotels.slice(
      currentLength,
      currentLength + hotelsToLoad
    );
    setDisplayedHotels([...displayedHotels, ...nextHotels]);
  };

  // Load the initial 10 hotels when the component mounts
  React.useEffect(() => {
    const sortedHotels = sortHotelsByRating();
    setDisplayedHotels(sortedHotels.slice(0, hotelsToLoad));
  }, []);

  return (
    <div>
      <Header />
      <Navbar />
      <br></br>
      <h3 style={{ color: "white", textAlign: "center", margin: "0 auto" }}>
        Trending Hotels Around The World
      </h3>
      <br></br>
      <div className="trending-container">
        {displayedHotels.map((hotel) => (
          <Card
            key={hotel.id}
            className="trending-card"
            style={{ backgroundColor: "#ff8c00", color: "black" }}
          >
            <CardContent className="trending-card-content">
              <Typography variant="h5" component="div">
                {hotel.name}
              </Typography>
              <Typography color="textSecondary">
                Rating: {hotel.rating}
              </Typography>
              <br></br>
              {/* Add more hotel details as needed */}
              <button
                className="favorite-view-button"
                onClick={() => {
                  navigate(`/explore/hotel/${hotel.id}`, {
                    state: { hotel },
                  });
                }}
              >
                View
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="hotel-button-container">
        <button className="hotel-button" onClick={loadMoreHotels}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default Trending;
