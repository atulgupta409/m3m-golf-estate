import React from "react";

const FloorPlans = () => {
  return (
    <div className="bg_gray main_container">
      <div className="container">
        <div className="text-center">
          <h2 className="main_title d-inline-block">
            <span>M3M Golf Estate</span> Floor Plan
          </h2>
        </div>
        <div className="row mt-3">
          <div className="col-md-3">
            <div className="floor-plan-box2">
              <div>
                <div className="floor-title-top"></div>
                <div className="floor-title text-center">
                  <h5>
                    Fairway West <br />
                    Floor Plans
                  </h5>
                </div>
                <div className="floor-title-bottom"></div>
                <p className="text-center">
                  <b>View all floor plans</b>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="floor-plan-box2">
              <div className="floor-plan-overlay">
                <div className="image-box">
                  <img
                    src="https://m3m-golfestate.in/images/floor-plan/east1.jpg"
                    class="img-fluid"
                    alt="Floor plan of M3M Golf estate 3843 Sqft"
                  />
                </div>
                <div className="title text-center">
                  <h4>4833 Sq.ft</h4>
                  <i>
                    <b>3BHK + Den</b>
                  </i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
        </div>
        <div className="row mt-5">
          <div className="col-md-3">
            <div className="floor-plan-box">
              <div>
                <div className="floor-title-top"></div>
                <div className="floor-title text-center">
                  <h5>
                    Fairway West <br />
                    Floor Plans
                  </h5>
                </div>
                <div className="floor-title-bottom"></div>
                <p className="text-center">
                  <b>View all floor plans</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorPlans;
