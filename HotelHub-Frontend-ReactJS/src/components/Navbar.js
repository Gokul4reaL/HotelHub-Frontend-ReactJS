import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "../styles/Navbar.css";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleTabMouseEnter = (tabName, tabUrl) => {
    setActiveTab(tabName);
    setIsDropdownVisible(true);
    navigate(tabUrl);
  };

  const handleTabMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  const handleLogoutClick = () => {
    console.log("Logout");
    localStorage.removeItem("token"); // remove the token from local storage
    navigate("/");
  };

  const tabs = [
    { name: "Dashboard", url: "/dashboard" },
    { name: "View Profile", url: "/view-profile" },
    { name: "Edit Profile", url: "/edit-profile" },
    { name: "Explore", url: "/explore" },
    { name: "Bookings", url: "/bookings" },
    { name: "Favorites", url: "/favorites" },
    { name: "Trending", url: "/trending" },
    // Add more tabs here
  ];

  const isTabActive = (tab) => {
    return location.pathname.startsWith(tab.url);
  };

  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-list">
          {tabs.map((tab) => (
            <li
              key={tab.name}
              className={`navbar-item ${isTabActive(tab) ? "active" : ""}`}
              onClick={() => handleTabMouseEnter(tab.name, tab.url)}
              onMouseLeave={handleTabMouseLeave}
            >
              {tab.name}
              {isDropdownVisible && isTabActive(tab) && (
                <div className="dropdown">
                  <div>
                    <div className="dropdown-option">View Profile</div>
                    <div className="dropdown-option">Edit Profile</div>
                  </div>
                  <div className="dropdown-option">Bookings</div>
                  <div className="dropdown-option">Favourites</div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="navbar-item signout" onClick={handleLogoutClick}>
          Logout
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
