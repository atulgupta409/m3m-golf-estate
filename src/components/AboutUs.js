import React from "react";
import ImageCarousal from "./ImageCarousal";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  const currentUrl = window.location.href;
  return (
    <div>
      <Helmet>
        <title>About M3M Golf Estate</title>
        <link rel="canonical" href={currentUrl} />
      </Helmet>
      <>
        <Navbar />
        <section className="inner_banner">
          <div className="overlay">
            <div className="container">
              <div className="title">
                <h4>About Us</h4>
              </div>
            </div>
          </div>
        </section>
        <div className="container about_real_estate abouties my-5">
          <div className="text-center">
            <h4 className="main_title2 d-inline-block">
              About <span>M3M Golf Estate</span>
            </h4>
          </div>
          <div className="row align-items-center">
            <div className="col-md-4">
              <ImageCarousal />
            </div>
            <div className="col-md-8">
              <h5>M3M GOLF ESTATE</h5>
              <p className="w-75">
                Imagine waking up to a designer Golf Course, that invigorating
                fragrance of morning freshness all but pulling you to your first
                drive of the day. Imagine taking a break after your first birdie
                of the day, and leisurely strolling through the lush landscapes,
                or maybe a jog on the rooftop jogging track. Imagine yourself
                surrounded by exotic water bodies and endless greens. No we are
                not describing a resort island in the Mediterranean; we are
                talking about your own abode in M3M Golf Estate.
              </p>
              <br />
              <p className="w-75">
                Iconic Club spread over 1.2 lakh sq.ft, Designed by Upton Hansen
                Associates- London. The club will have amenities comparable to a
                7- Star Resort including International Spa, Private Art Gallery,
                Unisex Gym and Salon, multi-cuisine restaurants and multiple
                recreational areas.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    </div>
  );
};

export default AboutUs;
