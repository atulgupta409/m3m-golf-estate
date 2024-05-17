import React from "react";
import { MAIN_BANNER } from "../utils/constants";

const MainBanner = ({ name, starting_price, configuration }) => {
  return (
    <div className="main_banner">
      <img src={MAIN_BANNER} alt="main banner" />
      <div className="layer"></div>
      <div className="text_layer">
        <div className="container property_banner_container">
          <div className="project_details">
            <h1 className="name">{name}</h1>
            <h3 className="location">Sector 65, Gurgaon</h3>
            <ul>
              <li>Ready To Move In</li>
              <li>Starting From Rs {starting_price}</li>
              <li>{configuration}</li>
            </ul>
            <a href="tel:9999063322" className="call_now_btn">
              Call Now : 9999063322
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
