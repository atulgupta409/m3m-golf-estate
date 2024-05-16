import React from "react";
import useGetData from "../utils/useGetData";
import { Link } from "react-router-dom";

const FloorPlans = () => {
  const data = useGetData();
  const fairWest = data[0]?.floor_plans?.filter(
    (plan) => plan?.category === "Fairway West"
  );
  const fairEast = data[0]?.floor_plans?.filter(
    (plan) => plan?.category === "Fairway East"
  );
  const stAndrews = data[0]?.floor_plans?.filter(
    (plan) => plan?.category === "St. Andrews"
  );
  const poloSuits = data[0]?.floor_plans?.filter(
    (plan) => plan?.category === "Polo Suits"
  );
  return (
    <div className="bg_gray main_container">
      <div className="container">
        <div className="text-center">
          <h2 className="main_title d-inline-block">
            <span>M3M Golf Estate</span> Floor Plan
          </h2>
        </div>
        <div className="row mt-3 overflow_row">
          <div className="col-md-3 col-10">
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
                <Link to={"/fairway-west-floor-plan.php"}>
                  <p className="text-center">
                    <b>View all floor plans</b>
                  </p>
                </Link>
              </div>
            </div>
          </div>
          {fairWest?.length > 0 &&
            fairWest[0]?.plans?.slice(0, 3).map((plan, i) => (
              <div className="col-md-3 col-10" key={i}>
                <div className="floor-plan-box2">
                  <div className="floor-plan-overlay">
                    <div className="image-box">
                      <img
                        src={plan?.img}
                        class="img-fluid"
                        alt={
                          "Floor plan of M3M Golf estate " +
                          plan?.name +
                          " " +
                          plan?.size
                        }
                      />
                    </div>
                    <div className="title text-center">
                      <h4>{plan?.size}</h4>
                      <i>
                        <b>{plan?.name}</b>
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="row mt-5 overflow_row">
          <div className="col-md-3 col-10">
            <div className="floor-plan-box">
              <div>
                <div className="floor-title-top"></div>
                <div className="floor-title text-center">
                  <h5>
                    Fairway East <br />
                    Floor Plans
                  </h5>
                </div>
                <div className="floor-title-bottom"></div>
                <Link to={"/fairway-east-floor-plan.php"}>
                  <p className="text-center">
                    <b>View all floor plans</b>
                  </p>
                </Link>
              </div>
            </div>
          </div>
          {fairEast?.length > 0 &&
            fairEast[0]?.plans?.slice(0, 3).map((plan, i) => (
              <div className="col-md-3 col-10" key={i}>
                <div className="floor-plan-box2 floor-plan-box">
                  <div className="floor-plan-overlay">
                    <div className="image-box">
                      <img
                        src={plan?.img}
                        class="img-fluid"
                        alt={
                          "Floor plan of M3M Golf estate " +
                          plan?.name +
                          " " +
                          plan?.size
                        }
                      />
                    </div>
                    <div className="title text-center">
                      <h4>{plan?.size}</h4>
                      <i>
                        <b>{plan?.name}</b>
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="row mt-5 overflow_row">
          <div className="col-md-3 col-10">
            <div className="floor-plan-box2">
              <div>
                <div className="floor-title-top"></div>
                <div className="floor-title text-center">
                  <h5>
                    St. Andrews <br />
                    Floor Plans
                  </h5>
                </div>
                <div className="floor-title-bottom"></div>
                <Link to={"/st-andrews-floor-plan.php"}>
                  <p className="text-center">
                    <b>View all floor plans</b>
                  </p>
                </Link>
              </div>
            </div>
          </div>
          {stAndrews?.length > 0 &&
            stAndrews[0]?.plans?.slice(0, 3).map((plan, i) => (
              <div className="col-md-3 col-10" key={i}>
                <div className="floor-plan-box2">
                  <div className="floor-plan-overlay">
                    <div className="image-box">
                      <img
                        src={plan?.img}
                        class="img-fluid"
                        alt={
                          "Floor plan of M3M Golf estate " +
                          plan?.name +
                          " " +
                          plan?.size
                        }
                      />
                    </div>
                    <div className="title text-center">
                      <h4>{plan?.size}</h4>
                      <i>
                        <b>{plan?.name}</b>
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="row mt-5 overflow_row">
          <div className="col-md-3 col-10">
            <div className="floor-plan-box">
              <div>
                <div className="floor-title-top"></div>
                <div className="floor-title text-center">
                  <h5>
                    Polo Suits <br />
                    Floor Plans
                  </h5>
                </div>
                <div className="floor-title-bottom"></div>
                <Link to={"/polo-suits-floor-plan.php"}>
                  <p className="text-center">
                    <b>View all floor plans</b>
                  </p>
                </Link>
              </div>
            </div>
          </div>
          {poloSuits?.length > 0 &&
            poloSuits[0]?.plans?.slice(0, 3).map((plan, i) => (
              <div className="col-md-3 col-10" key={i}>
                <div className="floor-plan-box2 floor-plan-box">
                  <div className="floor-plan-overlay">
                    <div className="image-box">
                      <img
                        src={plan?.img}
                        class="img-fluid"
                        alt={
                          "Floor plan of M3M Golf estate " +
                          plan?.name +
                          " " +
                          plan?.size
                        }
                      />
                    </div>
                    <div className="title text-center">
                      <h4>{plan?.size}</h4>
                      <i>
                        <b>{plan?.name}</b>
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FloorPlans;
