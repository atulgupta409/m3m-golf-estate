import React, { useEffect } from "react";
import { IMAGES } from "../utils/constants";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

const ImageCarousal = () => {
  useEffect(() => {
    // Ensure Bootstrap's carousel is initialized
    const carouselElement = document.querySelector(
      "#carouselExampleIndicators"
    );
    const bootstrapCarousel = new window.bootstrap.Carousel(carouselElement, {
      interval: 2000,
      ride: "carousel",
    });
  }, []);
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="2000"
    >
      <div className="carousel-indicators">
        {IMAGES.map((image, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : ""}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {IMAGES.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img src={image.img} className="d-block w-100" alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousal;
