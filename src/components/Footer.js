import React from "react";
import { Outlet } from "react-router-dom";
import "./Footer.css";

/*function Footer({ links }) {
  return (
    <footer>
      <div className="links-container">
        <a
          className="Reviews"
          href="https://localhost:3000/Review"
          id="Review"
          to="/Review"
        >
          Review
        </a>
        <a
          className="contactus"
          href="https://localhost:3000/ContactUs"
          id="ContactUs"
          to="/ContactUs"
        >
          Contact Us
        </a>
        <a
          className="about"
          href="https://localhost:3000/AboutUs"
          id="AboutUs"
          to="/AboutUs"
        >
          About Us
        </a>

        <div className="copyright">
          <p>Copyright © 2023 by Divine,Inc. All rights reserved.</p>
        </div>
      </div>
      <Outlet></Outlet>
    </footer>
  );
}

export default Footer;
*/
function Footer({ links }) {
  return (
    <div className="footer-container">
      <footer className="footer">
        <h1> Shop </h1>
        <a
          className="Reviews"
          href="http://localhost:3000/Review"
          id="Review"
          to="/Review"
        >
          Review
        </a>
        <h1> Contact Us </h1>
        <a
          className="contactus"
          href="http://localhost:3000/ContactUs"
          id="ContactUs"
          to="/ContactUs"
        >
          Contact Us
        </a>
        <h1> Business </h1>
        <a
          className="about"
          href="http://localhost:3000/AboutUs"
          id="AboutUs"
          to="/AboutUs"
        >
          About Us
        </a>
        <div className="copyright">
          <p>Copyright © 2023 by Divine,Inc. All rights reserved.</p>
        </div>
        <Outlet></Outlet>
      </footer>
    </div>
  );
}

export default Footer;
