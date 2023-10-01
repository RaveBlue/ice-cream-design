import "./App.css";
//import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Review from "./components/Review";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Products from "./components/Products";
import ProductSummary from "./components/ProductSummary";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Products" element={<Products />} />
        <Route path="ProductSummary" element={<ProductSummary />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
