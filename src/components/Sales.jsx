import React, { useEffect, useRef } from "react";
import "../styles/Sales.css"; // Ensure this CSS file is updated
import { FaArrowRight } from "react-icons/fa";
import adidasImage from "../assets/img/cta-1.jpg"; 
import nikeImage from "../assets/img/cta-2.jpg"; 

const SaleSection = () => {
    const saleSectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    } else {
                        entry.target.classList.remove("show"); // Remove for re-triggering animation
                    }
                });
            },
            { threshold: 0.3 } // Triggers when 30% of section is visible
        );

        const saleBoxes = saleSectionRef.current.querySelectorAll(".sale-box");
        saleBoxes.forEach((box) => observer.observe(box));

        return () => {
            saleBoxes.forEach((box) => observer.unobserve(box));
        };
    }, []);

    return (
        <section className="sale-section" ref={saleSectionRef}>
            {/* Left Side */}
            <div className="sale-box left">
                <img src={adidasImage} alt="Adidas Shoes" className="sale-image" />
                <div className="sale-content">
                    <p>Adidas Shoes</p>
                    <h1>The Summer Sale <br /> Off 50%</h1>
                    <button className="shop-now">
                        Shop Now <FaArrowRight />
                    </button>
                </div>
            </div>

            {/* Right Side */}
            <div className="sale-box right">
                <img src={nikeImage} alt="Nike Shoes" className="sale-image" />
                <div className="sale-content">
                    <p>Nike Shoes</p>
                    <h1>Make Yourself <br /> Keep Sporty</h1>
                    <button className="buy-now">
                        Buy Now <FaArrowRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SaleSection;
