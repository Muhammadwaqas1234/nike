import React from "react";
import "../styles/Blog.css"; // Import CSS file
import blogImg1 from "../assets/img/service-1.png"; // Replace with your image paths
import blogImg2 from "../assets/img/service-2.png";
import blogImg3 from "../assets/img/service-4.png";

const Blog = () => {
    return (
        <section className="blog-section">
            <div className="blog-container">
                {/* Blog Item 1 */}
                <div className="blog-item">
                    <img src={blogImg1} alt="Free Shipping" />
                    <div className="blog-text">
                        <h3>Free Shipping</h3>
                        <p>On shopping more than $200</p>
                    </div>
                </div>

                {/* Blog Item 2 */}
                <div className="blog-item">
                    <img src={blogImg2} alt="Quick Payment" />
                    <div className="blog-text">
                        <h3>Quick Payment</h3>
                        <p>100% Secure Payment</p>
                    </div>
                </div>

                {/* Blog Item 3 */}
                <div className="blog-item">
                    <img src={blogImg3} alt="Any Query" />
                    <div className="blog-text">
                        <h3>Any Query</h3>
                        <p>Contact with us</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
