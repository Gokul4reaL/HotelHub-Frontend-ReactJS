import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.css"; // Import the CSS for the footer

const Footer = () => {
  // Define your FAQ data
  const faqData = [
    {
      question: "Question 1",
      answer: "Answer 1",
    },
    {
      question: "Question 2",
      answer: "Answer 2",
    },
    // Add more questions and answers as needed
  ];

  return (
    <div className="footer-container">
      <div className="company-info">
        <h4>HotelHub</h4>
        <p>Location: Coimbatore, India</p>
        <p>Phone: +1 (123) 456-7890</p>
        <div className="social-media-icons">
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <div className="copyright-info">
        <p>&copy; 2023 HotelHub. All rights reserved.</p>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
  );
};

export default Footer;
