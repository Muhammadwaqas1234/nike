import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Cart.css";

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const removeFromCart = (id) => {
    setCart(cart.filter((shoe) => shoe.id !== id));
  };

  return (
    <section className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((shoe) => (
          <div className="cart-item" key={shoe.id}>
            <img src={shoe.image} alt={shoe.name} />
            <div>
              <h3>{shoe.name}</h3>
              <p className="shoe-price">${shoe.price}</p>
              <button className="remove-button" onClick={() => removeFromCart(shoe.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <button className="checkout-button" onClick={() => navigate("/checkout", { state: { cart } })}>
          Proceed to Checkout
        </button>
      )}
    </section>
  );
};

export default Cart;
