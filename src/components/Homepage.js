import React from "react";
import Navbar from "./Navbar";
import MainBanner from "./MainBanner";
import About from "./About";
import FloorPlans from "./FloorPlans";
import VideoSection from "./VideoSection";
import VipClub from "./VipClub";
import PriceTable from "./PriceTable";
import WhyGolfEstate from "./WhyGolfEstate";
import Contact from "./Contact";
import Partners from "./Partners";
import Location from "./Location";

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
      <WhyGolfEstate />
      <Contact />
      <Partners />
      <Location />
    </div>
  );
};

export default Homepage;
