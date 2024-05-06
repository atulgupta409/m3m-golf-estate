import React from "react";
import { BRAND_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
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
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
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
                  <a className="dropdown-item" href="#">
                    Fairway West
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Fairway East
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    St. Andrews
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Polo Suites
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Location Map
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Master Plan
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Overview
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
