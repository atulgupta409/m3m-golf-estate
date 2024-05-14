import React from "react";
import Navbar from "./Navbar";
import MainBanner from "./MainBanner";
import About from "./About";
import FloorPlans from "./FloorPlans";
import VideoSection from "./VideoSection";
import VipClub from "./VipClub";
import PriceTable from "./PriceTable";
import Contact from "./Contact";
import Partners from "./Partners";
import Location from "./Location";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <MainBanner />
      <About />
      <FloorPlans />
      <VideoSection />
      <VipClub />
      <PriceTable />
      <Contact />
      <Partners />
      <Location />
      <Footer />
    </div>
  );
};

export default Homepage;
