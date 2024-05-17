import React from "react";
import { BRAND_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="call_nav_fixed">
        <a href="tel:9999063322">Call Now : 9999063322</a>
      </div>
      <nav className="navbar navbar-expand-lg bg-white position-fixed w-100">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={BRAND_LOGO} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li> */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Floor Plan
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/fairway-west-floor-plan.php"
                    >
                      Fairway West
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/fairway-east-floor-plan.php"
                    >
                      Fairway East
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/st-andrews-floor-plan.php"
                    >
                      St. Andrews
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/polo-suits-floor-plan.php"
                    >
                      Polo Suits
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/m3m-golf-estate-location.php">
                  Location Map
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/m3m-golf-estate-master-plan.php"
                >
                  Master Plan
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us.php">
                  Overview
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
