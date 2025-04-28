import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Store from "./components/Store";
import PaymentPage from "./components/payment";
import Layout from "./components/Layout";
import ShoeDetails from "./components/Details";

function App() {
  return (
    <Router basename="/nike"> {/* Important: add basename for GitHub Pages */}
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Nested Routes */}
          <Route path="store" element={<Store />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="details" element={<ShoeDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
