import React from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import "../styles/payment.css";

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product; // Get product details

  return (
    <div className="payment-container">
      <h1 className="payment-title">Secure Payment</h1>
      <p className="payment-subtitle">Choose your preferred payment method</p>

      {/* Display Selected Product */}
      {product ? (
        <div className="selected-product">
          <img src={product.image} alt={product.name} className="product-image" />
          <h2>{product.name}</h2>
          <p className="product-price">Price: {product.price}</p>
        </div>
      ) : (
        <p className="error-message">No product selected.</p>
      )}

      <div className="payment-options">
        <button className="payment-button jazzcash">
          <img src="/assets/jazzcash-logo.png" alt="JazzCash" className="payment-logo" />
          Pay with JazzCash
        </button>

        <button className="payment-button easypaisa">
          <img src="/assets/easypaisa-logo.png" alt="EasyPaisa" className="payment-logo" />
          Pay with EasyPaisa
        </button>
      </div>

      <button className="back-button" onClick={() => navigate(-1)}>⬅ Back to Store</button>
    </div>
  );
};

export default PaymentPage;
