import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/About.css"; 

import menShoes from "../assets/img/collection-1.jpg";
import womenShoes from "../assets/img/collection-2.jpg";
import sportsShoes from "../assets/img/collection-3.jpg";

const About = () => {
  const aboutRef = useRef(null);
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("show");
            }, index * 500);
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = aboutRef.current.querySelectorAll(".about-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Function to handle navigation to the Store page
  const handleExploreClick = () => {
    navigate("/Store"); // Navigate to Store page
  };

  return (
    <section id="about" className="about-section" ref={aboutRef}>
      <div className="about-container">
        <div className="about-card">
          <img src={menShoes} alt="Men Shoes" className="about-image" />
          <h2 className="about-title">Men Collections</h2>
          <button onClick={handleExploreClick} className="explore-btn">
            Explore More
          </button>
        </div>

        <div className="about-card">
          <img src={womenShoes} alt="Women Shoes" className="about-image" />
          <h2 className="about-title">Women Collections</h2>
          <button onClick={handleExploreClick} className="explore-btn">
            Explore More
          </button>
        </div>

        <div className="about-card">
          <img src={sportsShoes} alt="Sports Shoes" className="about-image" />
          <h2 className="about-title">Sports Collections</h2>
          <button onClick={handleExploreClick} className="explore-btn">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
