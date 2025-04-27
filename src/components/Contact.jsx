import React, { useState } from 'react';
import '../styles/ContactUs.css'; // Import custom CSS for styling
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaTiktok, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Importing specific icons from react-icons

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    feedback: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your query has been submitted successfully!');
  };

  return (
    <div className="contact-us-wrapper">
      <div className="contact-form-wrapper">
        <div className="contact-info-left">
          <div className="connect-with-us">
            <h3 className="connect-heading">Connect with Us</h3>
            <ul className="social-list">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /> Facebook</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /> Twitter</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /> LinkedIn</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a></li>
              <li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /> TikTok</a></li>
              <li><a href="mailto:example@domain.com"><FaEnvelope /> Email</a></li>
              <li><a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"><FaWhatsapp /> WhatsApp</a></li>
            </ul>
          </div>

          <div className="location-info">
            <h3 className="location-heading">Our Location</h3>
            <p className="location-text">123 E-Commerce St, ShopCity, SC 12345</p>
          </div>

          <div className="policies-info-wrapper">
            <h3 className="policies-title">Chips - Policies & Information</h3>
            <ul className="policies-list">
              <li><a href="/privacy-policy" className="policy-link">Privacy Policy</a></li>
              <li><a href="/terms-and-conditions" className="policy-link">Terms & Conditions</a></li>
              <li><a href="/shipping-policy" className="policy-link">Shipping Policy</a></li>
              <li><a href="/return-policy" className="policy-link">Return & Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="contact-info-right">
          

          <form onSubmit={handleSubmit} className="query-form">
            <h3 className="query-form-title">Send Us Your Query</h3>
            <label htmlFor="name" className="query-form-label">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className="query-form-input"
            />

            <label htmlFor="address" className="query-form-label">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Your address"
              className="query-form-input"
            />

            <label htmlFor="email" className="query-form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your email"
              className="query-form-input"
            />

            <label htmlFor="feedback" className="query-form-label">Feedback</label>
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              required
              placeholder="Your feedback or message"
              className="query-form-textarea"
            ></textarea>

            <button type="submit" className="submit-query-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
