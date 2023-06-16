//import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Home from "./components/Home";
//import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
//import Footer from "./components/Footer";
//import ContactUs from "./components/ContactUs";
//import Review from "./components/Review";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Review" element={<Review />} />
      </Routes>
      <Footer />
    </Router>
  );
}

<Router>
  <Route exact path="/" component={Home} />
  <Route path="/AboutUs" component={AboutUs} />
  <Route path="/Products" component={Products} />
  <Route path="/Navbar" component={Navbar} />
  <Route path="/ContactUs" component={ContactUs} />
  <Route path="/Review" component={Review} />
</Router>;

export default App;
