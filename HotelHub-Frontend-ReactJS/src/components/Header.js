import React from "react";
import "../styles/Header.css"; // Import the CSS for the header
import logo from "../Assets/logo.png";
const Header = () => {
  return (
    <div className="header-container">
      <img src={logo} alt="HotelHub Logo" className="logo" />
    </div>
  );
};

export default Header;
