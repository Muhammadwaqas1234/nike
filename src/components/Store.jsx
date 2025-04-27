import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import shoesData from "./shoesData";
import "../styles/Store.css";

const Store = () => {
  const [filters, setFilters] = useState({ gender: "All", category: "All", company: "All", price: "All" });
  const shoeRefs = useRef([]);
  const navigate = useNavigate(); // Initialize navigation

  const handleFilterChange = (e) => setFilters({ ...filters, [e.target.name]: e.target.value });

  const filteredShoes = shoesData.filter((shoe) => (
    (filters.gender === "All" || shoe.gender === filters.gender) &&
    (filters.category === "All" || shoe.category === filters.category) &&
    (filters.company === "All" || shoe.company === filters.company) &&
    (filters.price === "All" || (filters.price === "Under 100" && shoe.price < 100) ||
      (filters.price === "100-150" && shoe.price >= 100 && shoe.price <= 150) ||
      (filters.price === "Above 150" && shoe.price > 150))
  ));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = `fadeInLeft 0.6s ease-out ${index * 0.2}s forwards`;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    shoeRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [filteredShoes]);

  return (
    <div className="store-container">
      {/* Filters */}
      <div className="store-filters">
        <h2 className="store-title">Filter Shoes</h2>
        <FilterDropdown label="Gender" name="gender" options={["All", "Men", "Women"]} onChange={handleFilterChange} />
        <FilterDropdown label="Category" name="category" options={["All", "Sports", "Runner", "Casual", "Formal"]} onChange={handleFilterChange} />
        <FilterDropdown label="Company" name="company" options={["All", "Nike", "Adidas", "Puma", "Bata"]} onChange={handleFilterChange} />
        <FilterDropdown label="Price" name="price" options={["All", "Under 100", "100-150", "Above 150"]} onChange={handleFilterChange} />
      </div>

      {/* Shoe Grid */}
      <div className="store-grid">
        {filteredShoes.map((shoe, index) => (
          <div
            key={shoe.id}
            ref={(el) => (shoeRefs.current[index] = el)}
            className="product-card hidden"
            onClick={() => navigate(`/details/${shoe.id}`)} // Navigate to details page
          >
            {shoe.discount > 0 && <div className="discount-badge">-{shoe.discount}%</div>}
            <img src={shoe.image} alt={shoe.name} className="product-image" />
            <h3 className="product-title">{shoe.name}</h3>
            <p className="product-info"><strong>Company:</strong> {shoe.company}</p>
            <p className="product-price"><strong>Price:</strong> ${shoe.price}</p>
            <button className="product-button">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Filter Dropdown Component
const FilterDropdown = ({ label, name, options, onChange }) => (
  <div className="filter-box">
    <label className="filter-label">{label}:</label>
    <select name={name} className="filter-select" onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

export default Store;
