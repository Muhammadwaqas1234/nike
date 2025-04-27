
import React, { useState, useEffect ,useRef } from "react";
import "../styles/Product.css";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate



// Import shoe images
import shoes from "../assets/img/shoes.png";
import shoes1 from "../assets/img/shoes1.png";
import shoes2 from "../assets/img/shoes2.png";
import shoes3 from "../assets/img/shoes3.png";
import shoes4 from "../assets/img/shoes4.png";
import shoes5 from "../assets/img/shoes5.png";
import shoes6 from "../assets/img/shoes6.png";
import shoes7 from "../assets/img/shoes7.png";
import shoes8 from "../assets/img/shoes8.png";

// Nike product images
import product1 from "../assets/img/product-1.jpg";
import product2 from "../assets/img/product-2.jpg";
import product3 from "../assets/img/product-3.jpg";
import product4 from "../assets/img/product-4.jpg";
import product5 from "../assets/img/product-5.jpg";
import product6 from "../assets/img/product-6.jpg";
import product7 from "../assets/img/product-7.jpg";
import product8 from "../assets/img/product-8.jpg";

// Puma product images
import ar1 from "../assets/img/ar1.png";
import ar2 from "../assets/img/ar2.png";
import ar3 from "../assets/img/ar3.png";
import ar4 from "../assets/img/ar4.png";

// Adidas product images
import pr1 from "../assets/img/pr1.png";
import pr2 from "../assets/img/pr2.png";
import pr3 from "../assets/img/pr3.png";
import pr4 from "../assets/img/pr4.png";
import pr5 from "../assets/img/pr5.png";
import pr6 from "../assets/img/pr6.png";
import pr7 from "../assets/img/pr7.png";
import pr8 from "../assets/img/pr8.png";

// Bata product images
import insta1 from "../assets/img/insta-1.jpg";
import insta2 from "../assets/img/insta-2.jpg";
import insta3 from "../assets/img/insta-3.jpg";
import insta4 from "../assets/img/insta-4.jpg";
import insta5 from "../assets/img/insta-5.jpg";
import insta6 from "../assets/img/insta-6.jpg";
import insta7 from "../assets/img/insta-7.jpg";
import insta8 from "../assets/img/insta-8.jpg";

// Shoe data object
const shoeData = {
    
        All: [
            { id: 1, name: "Nike Air", brand: "Nike", price: 120, discount: 20, image: shoes },
            { id: 2, name: "Puma Speed", brand: "Puma", price: 90, discount: 10, image: shoes1 },
            { id: 3, name: "Adidas Boost", brand: "Adidas", price: 150, discount: 15, image: shoes3 },
            { id: 4, name: "Bata Comfort", brand: "Bata", price: 70, discount: 5, image: shoes4 },
            { id: 5, name: "Apex Run", brand: "Apex", price: 80, discount: 12, image: shoes5 },
            { id: 6, name: "Nike Zoom", brand: "Nike", price: 130, discount: 18, image: shoes6 },
            { id: 7, name: "Puma Flex", brand: "Puma", price: 95, discount: 8, image: shoes7 },
            { id: 8, name: "Adidas Ultra", brand: "Adidas", price: 140, discount: 10, image: shoes8 },
            { id: 9, name: "Bata Classic", brand: "Bata", price: 60, discount: 5, image: shoes2 },
        ],
        Nike: [
            { id: 46, name: "Nike Air", brand: "Nike", price: 120, discount: 20, image: product1 },
            { id: 47, name: "Nike Zoom", brand: "Nike", price: 130, discount: 18, image: product2 },
            { id: 10, name: "Nike Runner", brand: "Nike", price: 110, discount: 15, image: product3 },
            { id: 11, name: "Nike Speed", brand: "Nike", price: 115, discount: 12, image: product4 },
            { id: 12, name: "Nike Elite", brand: "Nike", price: 140, discount: 22, image: product6 },
            { id: 13, name: "Nike Sport", brand: "Nike", price: 125, discount: 18, image: product7 },
            { id: 14, name: "Nike Pro", brand: "Nike", price: 135, discount: 20, image: product8 },
            { id: 15, name: "Nike Max", brand: "Nike", price: 145, discount: 25, image: product5 },
            { id: 16, name: "Nike Swift", brand: "Nike", price: 100, discount: 10, image: product1 },
        ],
        Puma: [
            { id: 48, name: "Puma Speed", brand: "Puma", price: 90, discount: 10, image: ar1 },
            { id: 49, name: "Puma Flex", brand: "Puma", price: 95, discount: 8, image: ar2 },
            { id: 17, name: "Puma Runner", brand: "Puma", price: 85, discount: 12, image: ar3 },
            { id: 18, name: "Puma Jump", brand: "Puma", price: 100, discount: 15, image: ar4 },
            { id: 19, name: "Puma Classic", brand: "Puma", price: 88, discount: 5, image: ar1 },
            { id: 20, name: "Puma Zoom", brand: "Puma", price: 110, discount: 10, image: ar2 },
            { id: 21, name: "Puma Ultra", brand: "Puma", price: 120, discount: 18, image: ar3 },
            { id: 22, name: "Puma Fit", brand: "Puma", price: 105, discount: 14, image: ar4 },
            { id: 23, name: "Puma Energy", brand: "Puma", price: 115, discount: 20, image: ar1 },
        ],
        Adidas: [
            { id: 50, name: "Adidas Boost", brand: "Adidas", price: 150, discount: 15, image: pr1 },
            { id: 51, name: "Adidas Ultra", brand: "Adidas", price: 140, discount: 10, image: pr2 },
            { id: 24, name: "Adidas Prime", brand: "Adidas", price: 135, discount: 12, image: pr3 },
            { id: 25, name: "Adidas Cloud", brand: "Adidas", price: 125, discount: 18, image: pr4 },
            { id: 26, name: "Adidas Sport", brand: "Adidas", price: 130, discount: 20, image: pr5 },
            { id: 27, name: "Adidas Max", brand: "Adidas", price: 145, discount: 25, image: pr6 },
            { id: 28, name: "Adidas Fit", brand: "Adidas", price: 140, discount: 22, image: pr7 },
            { id: 29, name: "Adidas Jump", brand: "Adidas", price: 120, discount: 10, image: pr8 },
            { id: 30, name: "Adidas Performance", brand: "Adidas", price: 155, discount: 28, image: pr1 },
        ],
        Bata: [
            { id: 52, name: "Bata Comfort", brand: "Bata", price: 70, discount: 5, image: insta2 },
            { id: 53, name: "Bata Classic", brand: "Bata", price: 60, discount: 5, image: insta3 },
            { id: 31, name: "Bata Elite", brand: "Bata", price: 80, discount: 10, image: insta4 },
            { id: 32, name: "Bata Pro", brand: "Bata", price: 85, discount: 12, image: insta5 },
            { id: 33, name: "Bata Ultra", brand: "Bata", price: 75, discount: 8, image: insta6 },
            { id: 34, name: "Bata Trend", brand: "Bata", price: 90, discount: 15, image: insta7 },
            { id: 35, name: "Bata Classic", brand: "Bata", price: 65, discount: 6, image: insta8 },
            { id: 36, name: "Bata Vintage", brand: "Bata", price: 95, discount: 20, image: insta1 },
            { id: 37, name: "Bata Sports", brand: "Bata", price: 100, discount: 22, image: insta2 },
        ],
        Apex: [
            { id: 54, name: "Apex Run", brand: "Apex", price: 80, discount: 12, image: shoes5 },
            { id: 38, name: "Apex Speed", brand: "Apex", price: 90, discount: 10, image: shoes6 },
            { id: 39, name: "Apex Ultra", brand: "Apex", price: 85, discount: 8, image: shoes7 },
            { id: 40, name: "Apex Fit", brand: "Apex", price: 95, discount: 15, image: shoes8 },
            { id: 41, name: "Apex Jump", brand: "Apex", price: 100, discount: 18, image: shoes1 },
            { id: 42, name: "Apex Classic", brand: "Apex", price: 75, discount: 10, image: shoes2 },
        ],
    };
    
    
    


    
    const Product = () => {
        const [selectedCategory, setSelectedCategory] = useState("All");
        const [visibleShoes, setVisibleShoes] = useState([]);
        const navigate = useNavigate();
        const shoeCardsRef = useRef([]);
    
        useEffect(() => {
            setVisibleShoes(shoeData[selectedCategory].slice(0, 9));
        }, [selectedCategory]);
    
        useEffect(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("visible");
                        } else {
                            entry.target.classList.remove("visible");
                        }
                    });
                },
                { threshold: 0.2 }
            );
    
            shoeCardsRef.current.forEach((card) => {
                if (card) observer.observe(card);
            });
    
            return () => observer.disconnect();
        }, [visibleShoes]);
    
        const handleCategoryChange = (category) => {
            setSelectedCategory(category);
            setVisibleShoes(shoeData[category].slice(0, 9));
        };
    
        const loadMoreShoes = () => {
            navigate("/store");
        };
    
        const handleBuyNow = (shoe) => {
            navigate(`/payment`, { state: { product: shoe } });
        };
    
        return (
            <section className="product-section">
                <h2 className="product-title">Best Seller Products</h2>
    
                {/* Category Selection Buttons */}
                <div className="category-buttons">
                    {Object.keys(shoeData).map((category) => (
                        <button
                            key={category}
                            className={selectedCategory === category ? "active" : ""}
                            onClick={() => handleCategoryChange(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
    
                {/* Shoes Display Section */}
                <div className="shoes-container">
                    {visibleShoes.map((shoe, index) => {
                        const discountedPrice = shoe.price - (shoe.price * shoe.discount / 100);
    
                        return (
                            <div
                                className="shoe-card"
                                key={shoe.id}
                                ref={(el) => (shoeCardsRef.current[index] = el)}
                            >
                                <img src={shoe.image} alt={shoe.name} />
                                <h3>{shoe.name}</h3>
    
                                {/* Price & Discount Display */}
                                <div className="price-container">
                                    <p className="original-price">
                                        <del>${shoe.price}</del>
                                    </p>
                                    <p className="discounted-price">${discountedPrice.toFixed(2)}</p>
                                    <span className="discount-badge">{shoe.discount}% OFF</span>
                                </div>
    
                                <button className="buy-now" onClick={() => handleBuyNow(shoe)}>
                                    Buy Now
                                </button>
                            </div>
                        );
                    })}
    
                    {/* Load More Button */}
                    <div className="shoe-card more-button-card">
                        <button className="more-button" onClick={loadMoreShoes}>
                            More Shoes <FaArrowRight />
                        </button>
                    </div>
                </div>
            </section>
        );
    };
    
    export default Product;