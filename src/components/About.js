import React from "react";
import ImageCarousal from "./ImageCarousal";
import { FaUserTie, FaSolarPanel } from "react-icons/fa";
import { RiUserLocationFill } from "react-icons/ri";
import { PiLightbulbFilamentBold } from "react-icons/pi";

const About = ({ about }) => {
  return (
    <div className="container main_container">
      <div className="row">
        <div className="col-md-4 mob_hide">
          <ImageCarousal />
        </div>
        <div className="col-md-8">
          <h2 className="main_title">
            About <span>M3M Golf Estate</span>
          </h2>
          <p className="text-justify">{about}</p>
          <div className="row mob_hide">
            <div className="col-md-6 d-flex align-items-center mt-4">
              <FaUserTie className="icons" />
              <div className="about_features">
                <h4>Premium Residences</h4>
                <p>
                  Air Conditioners Apartments with imported marble flooring.
                </p>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center mt-4">
              <RiUserLocationFill className="icons" />
              <div className="about_features">
                <h4>Prime Location</h4>
                <p>
                  M3M Golf Estate is located on high growth corridor of GCX Road
                </p>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center mt-5">
              <PiLightbulbFilamentBold className="icons" />
              <div className="about_features">
                <h4>UNMATCHED AMENITIES</h4>
                <p>Clubhouse featuring state of art facilities.</p>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center mt-5">
              <FaSolarPanel className="icons" />
              <div className="about_features">
                <h4>LIFESTYLE ELEMENTS</h4>
                <p>
                  Dedicated retail area to cater to daily requirements of the
                  residents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
