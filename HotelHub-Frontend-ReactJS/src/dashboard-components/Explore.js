import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Explore.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography, Popover, Button, TextField } from "@mui/material";
import Header from "../components/Header";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useFavorites } from "../dashboard-components/FavoritesContext";
import Navbar from "../components/Navbar";
import axios from "axios"; // Import Axios for making API requests
import { useUser } from "../components/UserContext";

const ProductCard = ({ hotel }) => {
  const { id, rating, price, description, name, location, availableRooms } =
    hotel;

  const navigate = useNavigate();
  const { userEmail } = useUser();

  const handleViewDetails = (hotelId) => {
    navigate(`/explore/hotel/${hotelId}`, { state: { hotel } });
  };

  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const addFavoriteToBackend = async (hotelId) => {
    try {
      // Make an API call to add the hotel to favorites on the backend
      const response = await axios.post(
        `http://localhost:8080/api/favorites/add?userEmail=${userEmail}&hotelId=${hotelId}`
      );
      if (response.status === 201) {
        // Update UI state, indicating that the hotel is now a favorite
        addFavorite(hotel);
      }
    } catch (error) {
      // Handle errors
      console.error("Error adding favorite:", error);
    }
  };

  const removeFavoriteFromBackend = async (hotelId) => {
    try {
      // Make an API call to remove the hotel from favorites on the backend
      const userEmail = "user@example.com"; // Replace with the actual user's email
      const response = await axios.post(
        `http://localhost:8080/api/favorites/remove?userEmail=${userEmail}&hotelId=${hotelId}`
      );
      if (response.status === 204) {
        // Update UI state, indicating that the hotel is no longer a favorite
        removeFavorite(hotel.id);
      }
    } catch (error) {
      // Handle errors
      console.error("Error removing favorite:", error);
    }
  };

  const handleToggleFavorite = async () => {
    if (isFavorite(hotel.id)) {
      // If the hotel is already a favorite, remove it
      removeFavoriteFromBackend(hotel.id);
    } else {
      // If the hotel is not a favorite, add it
      addFavoriteToBackend(hotel.id);
    }
  };

  return (
    <Card
      className="product-card"
      sx={{
        background: "#ff8c00",
        borderRadius: "7px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 1)",
      }}
    >
      <CardContent className="product-details">
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          className="product-title"
          sx={{ fontFamily: "rockwell" }}
        >
          <strong>
            <u>{name}</u>
          </strong>
        </Typography>
        <Typography
          variant="body2"
          color="text.primary"
          className="product-description"
        >
          {description}
        </Typography>
        <Typography
          variant="body1"
          color="text.primary"
          className="product-price"
        >
          <span className="price">
            <strong>₹ {price} </strong>
          </span>
          <span className="head">
            {" "}
            M.R.P:<s>{price + 169}</s>
          </span>
          <span className="tail"> (69% off)</span>
        </Typography>
        <Typography
          variant="body2"
          color="text.primary"
          className="product-description"
        >
          {availableRooms} Available Rooms
        </Typography>
        <Typography
          variant="body2"
          color="text.primary"
          className="product-description"
        >
          {rating} Rating
        </Typography>
        <Typography
          variant="body2"
          color="text.primary"
          className="product-description"
        >
          {location}
        </Typography>
        <br></br>
        <Button
          variant="contained"
          color="primary"
          className="product-button view-button"
          startIcon={<VisibilityIcon />}
          style={{ marginRight: "8px" }}
          onClick={() => handleViewDetails(id)}
        >
          View
        </Button>

        <Button
          variant="contained"
          onClick={handleToggleFavorite}
          className="product-button heart-button"
          style={{
            backgroundColor: isFavorite(hotel.id) ? "red" : "white",
          }}
        >
          <FavoriteIcon
            style={{ color: isFavorite(hotel.id) ? "white" : "red" }}
          />
        </Button>
      </CardContent>
    </Card>
  );
};

const Explore = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [originalHotels, setOriginalHotels] = useState([]);
  const [searched, setSearched] = useState(false);
  const [showAllHotels, setShowAllHotels] = useState(false);
  const [ratingFilter, setRatingFilter] = useState("");
  const [roomFilter, setRoomFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/hotels").then((response) => {
      setFilteredHotels(response.data);
      setOriginalHotels(response.data);
    });
  }, []);

  const handleSearch = () => {
    if (searchText.trim() === "") {
      return;
    }

    let filtered = originalHotels;

    if (searchText) {
      filtered = filtered.filter((hotel) =>
        hotel.location.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilteredHotels(filtered);
    setSearched(true);
  };

  const handleShowAllHotels = () => {
    setShowAllHotels(true);
    setFilteredHotels(originalHotels);
  };

  const handleFilterOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  const handleFilter = () => {
    let filtered = originalHotels;

    if (ratingFilter) {
      filtered = filtered.filter(
        (hotel) => hotel.rating >= parseInt(ratingFilter)
      );
    }

    if (roomFilter) {
      filtered = filtered.filter(
        (hotel) => hotel.availableRooms >= parseInt(roomFilter)
      );
    }

    if (priceFilter) {
      filtered = filtered.filter(
        (hotel) => hotel.price <= parseInt(priceFilter)
      );
    }

    setFilteredHotels(filtered);
    setSearched(true);
    handleFilterClose();
  };
  return (
    <div>
      <Header />
      <Navbar />
      <div className="explore-container">
        <h2 style={{ color: "white" }}>Explore Your Hotels Here!!!</h2>
        <div className="search-container">
          <input
            type="text"
            placeholder="Enter a City or Country"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="search-input"
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
          <button
            className="show-all-button"
            onClick={handleShowAllHotels}
            disabled={showAllHotels}
          >
            Show All Hotels
          </button>

          <button
            variant="outlined"
            color="primary"
            onClick={handleFilterOpen}
            className="filter-button"
          >
            Filter
          </button>
          <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleFilterClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <div className="filter-popover">
              <TextField
                type="number"
                label="Filter by Rating"
                value={ratingFilter}
                onChange={(e) => setRatingFilter(e.target.value)}
                variant="outlined"
                InputLabelProps={{
                  style: { color: "black" },
                }}
              />
              <TextField
                type="number"
                label="Filter by Available Rooms"
                value={roomFilter}
                onChange={(e) => setRoomFilter(e.target.value)}
                variant="outlined"
                InputLabelProps={{
                  style: { color: "black" },
                }}
              />
              <TextField
                type="number"
                label="Filter by Price"
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                variant="outlined"
                InputLabelProps={{
                  style: { color: "black" },
                }}
              />
              <Button
                variant="contained"
                class="btn btn-dark text-white"
                onClick={handleFilter}
              >
                Apply
              </Button>
            </div>
          </Popover>
        </div>
        <br></br>
        {searched || showAllHotels ? (
          <div className="hotel-container">
            {filteredHotels.map((hotel) => (
              <div key={hotel.id} className="hotel-card">
                <ProductCard hotel={hotel} />
              </div>
            ))}
          </div>
        ) : (
          <div style={{ color: "white", textAlign: "center" }}>
            Enter a city or country to search for hotels.
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
