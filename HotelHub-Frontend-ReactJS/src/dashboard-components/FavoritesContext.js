import React, { createContext, useContext, useState } from "react";

// Create a new context
const FavoritesContext = createContext();

// Create a context provider component
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Function to add a hotel to favorites
  const addFavorite = (hotel) => {
    setFavorites((prevFavorites) => [...prevFavorites, hotel]);
  };

  // Function to remove a hotel from favorites
  const removeFavorite = (hotelId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((hotel) => hotel.id !== hotelId)
    );
  };

  // Check if a hotel is in favorites
  const isFavorite = (hotelId) => {
    return favorites.some((hotel) => hotel.id === hotelId);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

// Custom hook to use the FavoritesContext
export const useFavorites = () => {
  return useContext(FavoritesContext);
};
