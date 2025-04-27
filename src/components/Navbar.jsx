import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll"; // Import smooth scrolling
import "../styles/Navbar.css";
import { 
  FaSearch, FaUser, FaHeart, FaLock, FaHome, FaInfo, 
  FaShoppingBag, FaStore, FaBlog, FaPhone 
} from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import logo from "../assets/img/sponsor-1.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Close menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="ShoeStore Logo" />
      </div>

      {/* Desktop Navigation */}
      <ul className="nav-links">
        <li><Link to="home" smooth={true} duration={500}><FaHome /> Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}><FaInfo /> About</Link></li>
        <li><Link to="product" smooth={true} duration={500}><FaShoppingBag /> Product</Link></li>
        <li><Link to="shop" smooth={true} duration={500}><FaStore /> Shop</Link></li>
        <li><Link to="blog" smooth={true} duration={500}><FaBlog /> Blog</Link></li>
        <li><Link to="contact" smooth={true} duration={500}><FaPhone /> Contact</Link></li>
      </ul>

      {/* Icons */}
      <div className="nav-icons">
        <FaSearch className="icon" />
        <FaUser className="icon" />
        <FaHeart className="icon" />
        <FaLock className="icon" />
      </div>

      {/* Mobile Menu */}
      <div className="menu-toggle" onClick={handleMenuToggle}>
        {menuOpen ? <AiOutlineClose className="menu-icon" /> : <AiOutlineMenu className="menu-icon" />}
      </div>

      {/* Mobile Dropdown Menu */}
      <div ref={menuRef} className={`dropdown-menu ${menuOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="home" smooth={true} duration={500} onClick={handleLinkClick}><FaHome /> Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} onClick={handleLinkClick}><FaInfo /> About</Link></li>
          <li><Link to="product" smooth={true} duration={500} onClick={handleLinkClick}><FaShoppingBag /> Product</Link></li>
          <li><Link to="shop" smooth={true} duration={500} onClick={handleLinkClick}><FaStore /> Shop</Link></li>
          <li><Link to="blog" smooth={true} duration={500} onClick={handleLinkClick}><FaBlog /> Blog</Link></li>
          <li><Link to="contact" smooth={true} duration={500} onClick={handleLinkClick}><FaPhone /> Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
