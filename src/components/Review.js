import React from "react";
//import { useSelector } from 'react-redux';
//import { selectReviews } from './features/reviews/reviewsSlice';
//import Review from "./components/Review";
import "./Review.css";
import LogoDivine from "./LogoDivine.png";
import Ben from "./Ben.jpg";
import Dave from "./Dave.jpg";
import Hannah from "./Hannah.jpg";
import Steve from "./Steve.jpg";

const Review = () => {
  return (
    <div>
      <section className="section-testimonials grid grid--2-cols">
        <div className="testimonials-container">
          <span className="sub">Divine Ice-Cream</span>
          <h2 className="review">Customer Reviews</h2>

          <div className="testimonials">
            <figure className="testimonial">
              <img
                className="testimonial-img"
                alt="Customer Dave Bryson"
                src={Dave}
              />
              <blockquote className="testimonial-text">
                Inexpensive, healthy and great-tasting Ice-Cream. It tastes
                truly magical!
              </blockquote>
              <p className="testimonial-name">&mdash; Dave Bryson</p>
            </figure>

            <figure className="testimonial">
              <img
                className="testimonial-img"
                alt="Customer Ben Hadley"
                src={Ben}
              />
              <blockquote className="testimonial-text">
                The Ice-cream is crazy good. It's amazing!
              </blockquote>
              <p className="testimonial-name">&mdash; Ben Hadley</p>
            </figure>

            <figure className="testimonial">
              <img
                className="testimonial-img"
                alt="Customer Steve Miller"
                src={Steve}
              />
              <blockquote className="testimonial-text">
                Divine Ice-cream is a life saver! I couldn't live without this
                Ice-cream.
              </blockquote>
              <p className="testimonial-name">&mdash; Steve Miller</p>
            </figure>
            <figure className="testimonial">
              <img
                className="testimonial-img"
                alt="Customer Hannah Smith"
                src={Hannah}
              />
              <blockquote className="testimonial-text">
                I got Divine Ice-cream for the whole family. It's great!
              </blockquote>
              <p className="testimonial-name">&mdash; Hannah Smith</p>
            </figure>
          </div>
        </div>

        <div className="gallery">
          <figure className="gallery-item">
            <img src={LogoDivine} alt="Divine Logo" />
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Review;
