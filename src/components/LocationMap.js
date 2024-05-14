import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ImageCarousal from "./ImageCarousal";
import useGetData from "../utils/useGetData";
import locationMap from "../assets/location-map-m3m-golf-estate.jpg";

const LocationMap = () => {
  const data = useGetData();
  return (
    <>
      <Navbar />
      <section className="inner_banner">
        <div className="overlay">
          <div className="container">
            <div className="title">
              <h4>M3M Golf Estate Fairway floor plans</h4>
            </div>
          </div>
        </div>
      </section>
      <div className="container about_real_estate my-5">
        <div className="text-center">
          <h4 className="main_title2 d-inline-block">
            Location <span>M3M Golf Estate</span>
          </h4>
        </div>
        <div className="row">
          <div className="col-md-4">
            <ImageCarousal />
          </div>
          <div className="col-md-8">
            <ul className="w-75">
              {data[0]?.locationAdvantages?.map((adv, i) => (
                <li key={i}>{adv}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <section className="review_and_blog map_loc">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="text-center">
                <h4 className="main_title2 d-inline-block">
                  M3M Golf Estate <span>Location Map</span>
                </h4>
              </div>
            </div>
            <div className="col-md-12 text-center">
              <img src={locationMap} alt="location map M3M golf estate" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LocationMap;
