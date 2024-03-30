import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <Carousel interval={3000}>
          <Carousel.Item>
            <img className="d-block w-100" src="hotel1.jpg" alt="First slide" />
            <Carousel.Caption>
              <h3>Welcome to HotelHub</h3>
              <p>Your one-stop destination for hotel bookings.</p>
              <Button variant="primary" href="/signin">
                Sign In
              </Button>
              <Button variant="success" href="/signup">
                Sign Up
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="hotel6.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3 className="carousel2">Explore Our Hotels</h3>
              <p className="carousel2">
                Find the perfect place to stay on your next trip.
              </p>
              <Button variant="primary" href="/signin">
                Sign In
              </Button>
              <Button variant="success" href="/signup">
                Sign Up
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          {/* Add more Carousel.Items as needed */}
          <Carousel.Item>
            <img className="d-block w-100" src="hotel9.jpg" alt="Third slide" />
            <Carousel.Caption>
              <h3 className="carousel3">Luxury Accommodations</h3>
              <p className="carousel3">
                Experience world-class luxury at our hotels.
              </p>
              <Button variant="primary" href="/signin">
                Sign In
              </Button>
              <Button variant="success" href="/signup">
                Sign Up
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="image3.jpg"
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h3 className="carousel4">Discover New Destinations</h3>
              <p className="carousel4">
                Explore exciting destinations around the world.
              </p>
              <Button variant="primary" href="/signin">
                Sign In
              </Button>
              <Button variant="success" href="/signup">
                Sign Up
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default HeroSection;
