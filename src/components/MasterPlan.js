import React from "react";
import ImageCarousal from "./ImageCarousal";
import Navbar from "./Navbar";
import masterPlan from "../assets/master-plan-m3m-golf-estate.jpg";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";
import ScrollToTop from "./ScrollToTop";

const MasterPlan = () => {
  const currentUrl = window.location.href;
  return (
    <>
      <ScrollToTop />
      <Helmet>
        <title>M3M Golf Estate Master Plan Sector 65 Gurgaon</title>
        <meta
          name="description"
          content="m3m golf estate consists super luxury golf apartments varying 3005 to 5900 sqft, investments at golf estate starts from 5 cr."
        />
        <link rel="canonical" href={currentUrl} />
      </Helmet>
      <Navbar />
      <section className="inner_banner">
        <div className="overlay">
          <div className="container">
            <div className="title">
              <h4>M3M Golf Estate Fairway master plan</h4>
            </div>
          </div>
        </div>
      </section>
      <div className="container about_real_estate about_estate my-5">
        <div className="text-center">
          <h4 className="main_title2 d-inline-block">
            Site Plan <span>M3M Golf Estate</span>
          </h4>
        </div>
        <div className="row align-items-center">
          <div className="col-md-4">
            <ImageCarousal />
          </div>
          <div className="col-md-8">
            <h5>M3M GOLF ESTATE SITE LAYOUT</h5>
            <p className="w-75">
              <b>Iconic Club</b> spread over 1.2 lakh sq.ft, Designed by Upton
              Hansen Associates- London. The club will have amenities comparable
              to a <b>7- Star Resort</b> including International Spa, Private
              Art Gallery, Unisex Gym and Salon, multi-cuisine restaurants and
              multiple recreational areas. Designer{" "}
              <b>9-hole Executive Golf Course</b> and multiple sport areas
              spread across the project. <b>Dedicated amenity floors</b> to
              ensure that lifestyle elements can be brought as close to your
              doorstep. <b>Dedicated retail area</b> to cater to daily
              requirements of the residents <b>5-Tier security</b> for your
              complete peace of mind. <b>Multiple community zones</b> created
              specially underneath 8.5 mtr high stilts to provide all weather
              recreation zones including kids play areas, skating rinks,
              basketball courts, amphitheatre, rock climbing, and numerous such
              zones.
            </p>
          </div>
        </div>
      </div>
      <section className="review_and_blog map_loc">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="text-center">
                <h4 className="main_title2 d-inline-block">
                  M3M Golf Estate <span>Master Plan</span>
                </h4>
              </div>
            </div>
            <div className="col-md-12 text-center mast">
              <img src={masterPlan} alt="site map M3M golf estate" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MasterPlan;
