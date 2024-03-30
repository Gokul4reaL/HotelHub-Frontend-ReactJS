import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./components/Dashboard";
import "./App.css";
import EditProfile from "./dashboard-components/EditProfile";
import ViewProfile from "./dashboard-components/ViewProfile";
import Explore from "./dashboard-components/Explore";
import Bookings from "./dashboard-components/Bookings";
import Trending from "./dashboard-components/Trending";
import HotelDetails from "./dashboard-components/HotelDetails";
import HotelImages from "./dashboard-components/HotelImages";
import BookHotels from "./dashboard-components/BookHotels";
import Payment from "./dashboard-components/Payments";
import Favorites from "./dashboard-components/Favorites"; // Import the FavoritesProvider
import AboutUs from "./starter/About";
import OurPartners from "./starter/Partners";
import Awards from "./starter/Awards";
import OngoingOffers from "./starter/Offers";
import ReferralProgram from "./starter/Refer";

const App = () => {
  // Initialize the initial userData state here

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/partners" element={<OurPartners />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/offers" element={<OngoingOffers />} />
          <Route path="/referral-program" element={<ReferralProgram />} />

          <Route path="/view-profile" element={<ViewProfile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route
            path="/favorites"
            element={<Favorites />} // Use the FavoritesProvider here
          />
          <Route path="/trending" element={<Trending />} />
          <Route path="/explore/hotel/:id" element={<HotelDetails />} />
          <Route path="/explore/hotel/:id/images" element={<HotelImages />} />
          <Route
            path="/explore/hotel/:id/bookhotels"
            element={<BookHotels />}
          />
          <Route
            path="/explore/hotel/:id/bookhotels/payment"
            element={<Payment />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
