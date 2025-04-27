import { useParams, useNavigate } from "react-router-dom";
import { FaTimes, FaMoneyBillWave, FaShoppingCart, FaHeart } from "react-icons/fa";
import shoesData from "./shoesData";
import "../styles/Details.css";

const ShoeDetails = () => {
  const { id } = useParams(); // Get shoe ID from URL
  const navigate = useNavigate();

  const shoe = shoesData.find((shoe) => shoe.id === parseInt(id));

  if (!shoe) return <h2 className="error-message">Shoe not found!</h2>;

  return (
    <div className="details-container">
      <div className="details-box">
        <button className="details-close" onClick={() => navigate(-1)}><FaTimes /></button>

        <img src={shoe.image} alt={shoe.name} className="details-image" />

        <div className="details-info">
          <h2 className="details-title">{shoe.name}</h2>
          <p><strong>Category:</strong> {shoe.category}</p>
          <p><strong>Company:</strong> {shoe.company}</p>
          <p><strong>Price:</strong> ${shoe.price}</p>
          {shoe.discount > 0 && <p className="details-discount">Discount: {shoe.discount}%</p>}

          {/* Buttons */}
          <div className="details-actions">
            <button className="action-button action-pay" onClick={() => navigate("/payment")}>
              <FaMoneyBillWave /> Pay Now
            </button>
            <button className="action-button action-cart"><FaShoppingCart /> Add to Cart</button>
            <button className="action-button action-favorite"><FaHeart /> Favourite</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoeDetails;
