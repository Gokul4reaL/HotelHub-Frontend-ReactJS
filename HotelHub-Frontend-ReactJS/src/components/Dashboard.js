import React from "react";
import "../styles/Dashboard.css";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <Header />
      <Navbar />
      <div className="dashboard-container">
        {/* Your existing code */}
        <div className="additional-content">
          {/* About Us */}
          <div className="container-card">
            <div className="card">
              <h3>About Us</h3>
              <p>HotelHub is an upcoming hotel booking agency which is ....</p>
              <button onClick={() => navigate("/about")}>Learn More</button>
            </div>
          </div>

          {/* Our Partners */}
          <div className="container-card">
            <div className="card">
              <h3>Our Partners</h3>
              <p>
                Check out our evergrowing list of partners from all over the
                world.
              </p>
              <button onClick={() => navigate("/partners")}>Learn More</button>
            </div>
          </div>

          {/* Awards */}
          <div className="container-card">
            <div className="card">
              <h3>Awards</h3>
              <p>Discover the awards and recognitions we've received.</p>
              <button onClick={() => navigate("/awards")}>Learn More</button>
            </div>
          </div>

          {/* Quick Guide */}
          <div className="container-card">
            <div className="card">
              <h3>Quick Guide</h3>
              <ul>
                <li>1. Search for hotels in your destination.</li>
                <li>2. Select your check-in and check-out dates.</li>
                <li>3. Browse available hotels and choose one.</li>
                <li>4. Complete your booking with ease.</li>
              </ul>
            </div>
          </div>

          {/* Ongoing Offers */}
          <div className="container-card">
            <div className="card">
              <h3>Ongoing Offers</h3>
              <p>Check out our latest offers and discounts.</p>
              <button onClick={() => navigate("/offers")}>View Offers</button>
            </div>
          </div>

          {/* Referral Program */}
          <div className="container-card">
            <div className="card">
              <h3>Refer & Get Discounts</h3>
              <p>
                Refer your friends and get up to 75% discount on your first
                booking.
              </p>
              <button onClick={() => navigate("/referral-program")}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
