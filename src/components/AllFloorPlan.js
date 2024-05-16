import React from "react";
import Navbar from "./Navbar";
import useGetData from "../utils/useGetData";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";

const AllFloorPlan = () => {
  const data = useGetData();
  const { floorPlan } = useParams();

  const floor_plan = data[0]?.floor_plans?.filter(
    (plan) => plan?.slug === floorPlan
  );
  const towersSet = new Set();
  if (floor_plan?.length > 0) {
    floor_plan[0]?.plans?.forEach((plan) => {
      if (plan?.tower) {
        towersSet.add(plan.tower);
      }
    });
  }

  const allTowers = Array.from(towersSet);
  return (
    <>
      <Helmet>
        <title>
          M3M Golf Estate
          {/* {floor_plan?.length > 0 && floor_plan[0]?.category}{" "} */}
          Floor Plan
        </title>
      </Helmet>
      <Navbar />
      <section className="inner_banner">
        <div className="overlay">
          <div className="container">
            <div className="title">
              <h4>
                M3M Golf Estate{" "}
                {floor_plan?.length > 0 && floor_plan[0]?.category} floor plans
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section className="review_and_blog">
        <div className="container">
          {allTowers?.map((tower) => (
            <div className="row mt-5" key={tower}>
              <h4 className="main_title2">
                {floor_plan[0]?.category} Floor Plan <br />
                <span>Duplex (Tower {tower})</span>
              </h4>
              {floor_plan[0]?.plans
                ?.filter((p) => p?.tower === tower)
                ?.map((plan, i) => (
                  <div className="col-md-3 mt-4" key={i}>
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
          ))}
        </div>
      </section>
      <section className="other-floor-plan text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="other-floor-box">
                <div className="floor-box-link">
                  <div className="floor-box-detail">
                    <Link to="/fairway-west-floor-plan.php">
                      <h4>
                        Fairway West <br />
                        Floor Plan
                      </h4>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="other-floor-box">
                <div className="floor-box-link">
                  <div className="floor-box-detail">
                    <Link to="/fairway-east-floor-plan.php">
                      <h4>
                        Fairway East <br />
                        Floor Plan
                      </h4>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="other-floor-box">
                <div className="floor-box-link">
                  <div className="floor-box-detail">
                    <Link to="/st-andrews-floor-plan.php">
                      <h4>
                        St. Andrews <br />
                        Floor Plan
                      </h4>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="other-floor-box">
                <div className="floor-box-link">
                  <div className="floor-box-detail">
                    <Link to="/polo-suits-floor-plan.php">
                      <h4>
                        Polo Suits <br />
                        Floor Plan
                      </h4>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AllFloorPlan;
