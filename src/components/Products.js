//import "./Products.css";
//import { Fragment } from "react";
//import "./Products.css";
//import ProductSummary from "./ProductSummary";
//import AvailableProducts from "./AvailableProducts";
//import Modal from "./Modal";
//import Header from "./Header";
//import Navbar from "./Navbar";
//import HeaderCartButton from "./HeaderCartButton";
import { Fragment } from "react";
import "./Products.css";
import ProductSummary from "./ProductSummary";
//import AvailableProducts from "./AvailableProducts";
//import Modal from "./Modal";
//import Header from "./Header";
//import Navbar from "./Navbar";
//import HeaderCartButton from "./HeaderCartButton";

const Products = () => {
  return (
    <div className="featured-products">
      <div className="top">
        <h1>Products</h1>
        <p className="description-products">
          Reach your health and fitness goals with Ice-cream!
        </p>
      </div>
      <div className="bottom"></div>
      <Fragment>
        <ProductSummary />
        {/*<AvailableProducts />*/}
      </Fragment>
    </div>
  );
};

export default Products;
