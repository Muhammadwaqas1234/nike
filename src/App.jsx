import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Store from "./components/Store";
import PaymentPage from "./components/payment";
import ShoeDetails from "./components/Details";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Shop from "./components/Shop";
import Sales from "./components/Sales";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Product />} />
          <Route path="shop" element={<Shop />} />
          <Route path="sales" element={<Sales />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="store" element={<Store />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="details" element={<ShoeDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
