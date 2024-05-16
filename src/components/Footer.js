import React from "react";
import { Link } from "react-router-dom";
import { BRAND_LOGO } from "../utils/constants";
import { FacebookProvider, Page } from "react-facebook";

const Footer = () => {
  return (
    <footer>
      <div className="main_footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="about_estate">
                <Link to={"/"}>
                  <img src={BRAND_LOGO} alt="logo" />
                </Link>
                <div className="mob_hide">
                  <FacebookProvider appId="YOUR_APP_ID">
                    <Page
                      href="https://www.facebook.com/GOLFESTATEM3M/?modal=admin_todo_tour"
                      tabs="timeline"
                      width="340"
                      height="500"
                    />
                  </FacebookProvider>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mob_hide">
              <div className="useful_link">
                <div className="footer_title">
                  <h3>M3M Golf Estate</h3>
                </div>
                <ul>
                  <li>
                    <a href="/fairway-west-floor-plan.php">
                      <i class="fa fa-angle-right"></i>
                      Fairway West Floor Plans
                    </a>
                  </li>
                  <li>
                    <a href="/fairway-east-floor-plan.php">
                      <i class="fa fa-angle-right"></i>
                      Fairway East Floor Plans
                    </a>
                  </li>
                  <li>
                    <a href="/st-andrews-floor-plan.php">
                      <i class="fa fa-angle-right"></i>
                      St. Andrews Floor Plans
                    </a>
                  </li>
                  <li>
                    <a href="/polo-suits-floor-plan.php">
                      <i class="fa fa-angle-right"></i>
                      Polo Suits Floor Plans
                    </a>
                  </li>
                  <li>
                    <a href="/pricing.php">
                      <i class="fa fa-angle-right"></i>
                      Golf Estate Pricing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 mob_hide">
              <div className="useful_link">
                <div className="footer_title">
                  <h3>M3M Projects</h3>
                </div>
                <ul>
                  <li>
                    <a href="/fairway-west-floor-plan.php">
                      <i class="fa fa-angle-right"></i>
                      M3M Latitude
                    </a>
                  </li>
                  <li>
                    <a href="/fairway-east-floor-plan.php">
                      <i class="fa fa-angle-right"></i>
                      M3M Merlin
                    </a>
                  </li>
                  <li>
                    <a href="/st-andrews-floor-plan.php">
                      <i class="fa fa-angle-right"></i>
                      M3M Woodshire
                    </a>
                  </li>
                  <li>
                    <a href="/polo-suits-floor-plan.php">
                      <i class="fa fa-angle-right"></i>
                      M3M 65th Avenue
                    </a>
                  </li>
                  <li>
                    <a href="/pricing.php">
                      <i class="fa fa-angle-right"></i>
                      M3M Corner Walk
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="useful_link">
                <div className="footer_title">
                  <h3>Contact Info</h3>
                </div>
                <ul>
                  <li className="text-white" style={{ lineHeight: "26px" }}>
                    <i class="fa fa-angle-right"></i>
                    Gupta Promoters, 7C, Omaxe Gurgaon Mall, Sohna Road
                  </li>
                  <li>
                    <a href="/tel:9999063322">
                      <i class="fa fa-angle-right"></i>
                      Phone: 9999063322
                    </a>
                  </li>
                  <li className="text-white" style={{ lineHeight: "26px" }}>
                    <i class="fa fa-angle-right"></i>
                    Tuesday - Sunday 10 AM - 7 PM Monday Holiday
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom_footer">
        <div className="container">
          <div className="text">
            <p>
              Copyright © Gupta Promoters All right reserved.
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Invented by{" "}
              <a href="https:alexandro.in">Alexandro.in</a> With ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
