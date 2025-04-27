import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Shop.css";
import mainImage from "../assets/img/special-banner.jpg";  
import img1 from "../assets/img/hero.png";  
import img2 from "../assets/img/about-img.png";  
import img3 from "../assets/img/download.jpeg";  
import img4 from "../assets/img/download1.jpeg";  
import img5 from "../assets/img/download2.jpeg";  
import img6 from "../assets/img/images1.jpeg";  
import { FaArrowRight } from "react-icons/fa";

const shoesData = [
    { img: img1, name: "Nike Air Max", category: "Men", subcategory: "Sports", price: 120 },
    { img: img2, name: "Puma Runner", category: "Women", subcategory: "Casual", price: 95 },
    { img: img3, name: "Adidas Boost", category: "Men", subcategory: "Sports", price: 110 },
    { img: img4, name: "Bata Classic", category: "Women", subcategory: "Formal", price: 80 },
    { img: img5, name: "Apex Sneaker", category: "Men", subcategory: "Sports", price: 105 },
    { img: img6, name: "Reebok Fast", category: "Women", subcategory: "Running", price: 115 },
];

const getRandomDiscount = () => Math.floor(Math.random() * 30) + 10; // Random discount between 10-40%

const Shop = () => {
    const [showMore, setShowMore] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setShowMore(false); // Reset visibility when the user navigates back
    }, []);

    const handleBuyNow = (shoe) => {
        navigate("/payment", { state: { product: shoe } });
    };

    return (
        <section className="shop-container">
            {/* Main Image with "New Addition" Overlay */}
            <div className="shop-image-container">
                <div className="new-addition-text">NEW TREND EDITION</div>
                <img src={mainImage} alt="New Collection" />
            </div>

            {/* Right Side Content */}
            <div className="shop-content">
                <div className="shop-title">
                    <h2>New Collection</h2>
                </div>

                {/* Shoes Grid */}
                <div className={`shop-grid ${showMore ? "expanded" : ""}`}>
                    {shoesData.slice(0, showMore ? 6 : 3).map((shoe, index) => {
                        const discount = getRandomDiscount(); // Get discount %
                        const discountedPrice = (shoe.price - (shoe.price * discount) / 100).toFixed(2); // Calculate final price

                        return (
                            <div key={index} className="shoe-item">
                                <span className="shoe-discount">{discount}% OFF</span>
                                <img src={shoe.img} alt={shoe.name} />
                                <h3 className="shoe-name">{shoe.name}</h3>
                                <p className="shoe-category">{shoe.category} - {shoe.subcategory}</p>
                                <p className="shoe-price">
                                    <span className="original-price">${shoe.price.toFixed(2)}</span> →  
                                    <span className="discounted-price"> ${discountedPrice}</span>
                                </p>
                                <button className="shoe-buy-button" onClick={() => handleBuyNow(shoe)}>
                                    Buy Now
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* More Button */}
                {!showMore && (
                    <div className="shop-more-container">
                        <button className="shop-more-button" onClick={() => setShowMore(true)}>
                            More <FaArrowRight />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Shop;
