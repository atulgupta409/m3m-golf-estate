import React from "react";
import { Link } from "react-router-dom";

const WhyGolfEstate = () => {
  return (
    <div className="bg_gray">
      <div className="container main_container">
        <div className="text-center">
          <h2 className="main_title d-inline-block">
            <span>100 Reasons to live</span> at m3m Golf Estate
          </h2>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="reason-box">
              <img
                src="https://m3m-golfestate.in/images/reason/1.jpg"
                alt="reason 1"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <center>
          <Link>
            <button className="btn btn-lg theme_btn2 tran3s">View All</button>
          </Link>
        </center>
      </div>
    </div>
  );
};

export default WhyGolfEstate;
