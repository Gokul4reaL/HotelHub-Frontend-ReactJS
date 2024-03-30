import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios for making API requests
import { useFavorites } from "./FavoritesContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../styles/Favorites.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useUser } from "../components/UserContext";

const Favorites = () => {
  const { favorites } = useFavorites();
  const [favoriteHotels, setFavoriteHotels] = useState([]);
  const navigate = useNavigate();
  const { userEmail } = useUser();

  useEffect(() => {
    // Define a function to fetch favorite hotels
    const fetchFavoriteHotels = async () => {
      try {
        // Make an API call to fetch favorite hotels using the user's email
        const response = await axios.get(
          "http://localhost:8080/api/favorites/get",
          {
            params: {
              userEmail, // Replace with the actual user's email
            },
          }
        );

        // Update the state with the fetched favorite hotels
        setFavoriteHotels(response.data);
      } catch (error) {
        console.error("Error fetching favorite hotels:", error);
      }
    };

    // Call the fetch function when the component mounts
    fetchFavoriteHotels();
  }, []); // Empty dependency array to run the effect once

  return (
    <div>
      <Header />
      <Navbar />
      <br></br>
      <h3 style={{ color: "white", textAlign: "center", margin: "0 auto" }}>
        Your Favorite Hotels
      </h3>
      <div className="favorites-container">
        {favoriteHotels.length === 0 ? (
          <p>You haven't added any hotels to your favorites yet.</p>
        ) : (
          favoriteHotels.map((hotel) => (
            <Card
              key={hotel.id}
              className="favorite-card"
              style={{ backgroundColor: "#ff8c00", color: "black" }}
            >
              <CardContent className="favorite-card-content">
                <Typography
                  variant="h5"
                  component="div"
                  className="favorite-card-title"
                >
                  {hotel.name}
                </Typography>
                <Typography
                  color="textSecondary"
                  className="favorite-card-location"
                >
                  {hotel.location}
                </Typography>

                <Typography
                  variant="body2"
                  color="textSecondary"
                  className="favorite-card-price"
                >
                  Price: ${hotel.price}
                </Typography>
                <br></br>
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
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;
