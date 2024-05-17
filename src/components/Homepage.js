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
import { Helmet } from "react-helmet-async";
import useGetData from "../utils/useGetData";
import ScrollToTop from "./ScrollToTop";

const Homepage = () => {
  const data = useGetData();
  const seoData = data[0]?.seo[0];
  console.log(seoData);
  const currentUrl = window.location.href;
  return (
    <div>
      <ScrollToTop />
      <Helmet>
        <title>{seoData?.title}</title>
        <meta name="description" content={seoData?.description} />
        <meta name="keywords" content={seoData?.keywords} />
        <meta property="og:title" content={seoData?.title} />
        <meta property="og:description" content={seoData?.description} />
        <meta name="twitter:title" content={seoData?.title} />
        <meta name="twitter:description" content={seoData?.description} />
        <link rel="canonical" href={currentUrl} />
        <script type="application/ld+json">
          {JSON.stringify(seoData?.schema)}
        </script>
      </Helmet>
      <Navbar />
      <MainBanner
        name={data[0]?.name}
        configuration={data[0]?.configuration}
        starting_price={data[0]?.starting_price}
      />
      <About about={data[0]?.about} />
      <FloorPlans />
      <VideoSection />
      <VipClub />
      <PriceTable price={data[0]?.price} />
      <Contact />
      <Partners />
      <Location />
      <Footer />
    </div>
  );
};

export default Homepage;
