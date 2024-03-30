import React, { useState } from "react";
import "../styles/TabMenu.css"; // Import your CSS file

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tab-menu">
      <ul>
        <li
          className={activeTab === "profile" ? "active" : ""}
          onClick={() => handleTabClick("profile")}
        >
          Your Profile
        </li>
        <li
          className={activeTab === "explore" ? "active" : ""}
          onClick={() => handleTabClick("explore")}
        >
          Explore Hotels
        </li>
        <li
          className={activeTab === "history" ? "active" : ""}
          onClick={() => handleTabClick("history")}
        >
          My History
        </li>
        <li
          className={activeTab === "trending" ? "active" : ""}
          onClick={() => handleTabClick("trending")}
        >
          Trending Hotels in Your Location
        </li>
      </ul>
    </div>
  );
};

export default TabMenu;
