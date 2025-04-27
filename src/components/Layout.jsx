import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Shop from "./Shop";
import Sales from "./Sales";
import Blog from "./Blog";
import Contact from "./Contact";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div id="home">
                <Home />
            </div>

            <div id="about">
                <About />
            </div>

            <div id="product">
                <Product />
            </div>

            <div id="shop">
                <Shop />
            </div>

            <div id="sales">
                <Sales />
            </div>

            <div id="blog">
                <Blog />
            </div>

            <div id="contact">
                <Contact />
            </div>

            <Outlet />
        
    


      <Outlet />
    </>
  );
};

export default Layout;
