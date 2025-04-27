import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/Home.css";

const Home = () => {
  const homeRef = useRef(null);
  const navigate = useNavigate(); // Initialize navigation function

  useEffect(() => {
    const sections = homeRef.current.querySelectorAll(".animate-text");

    let delay = 0;
    sections.forEach((section, index) => {
      setTimeout(() => {
        animateText(section);
      }, delay);
      delay += section.textContent.split(" ").length * 200; // Delay based on words
    });

    function animateText(element) {
      const words = element.textContent.split(" ");
      element.innerHTML = ""; // Clear existing text
      words.forEach((word, index) => {
        setTimeout(() => {
          element.innerHTML += word + " ";
        }, index * 200);
      });
    }
  }, []);

  // Function to handle navigation to Store page
  const handleShopNowClick = () => {
    navigate("/store"); // Redirects to Store page
  };

  return (
    <section id="home" className="home" ref={homeRef}>
      <div className="overlay"></div>
      <div className="home-content">
        <h1 className="normal-text animate-text">New Summer</h1>
        <h1 className="bold-text animate-text">Shoes Collection</h1>
        <p className="animate-text">
          Discover the latest summer shoes with ultra-lightweight comfort.
          Perfect for any occasion, from casual wear to sports activities.
          Get the best deals on premium quality shoes for this season.
        </p>
        <button onClick={handleShopNowClick} className="shop-btn">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Home;
