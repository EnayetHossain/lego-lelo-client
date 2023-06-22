import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./Gallery.css";

const Gallery = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="gallery-container">
      <h1 className="text-center gallery-title">Our Gallery</h1>
      <div
        className="gallery-section desktop-max"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="gallery-img">
          <img src={"/images/1.jpg"} alt="gallery" />
        </div>
        <div className="gallery-img">
          <img src={"/images/2.jpg"} alt="gallery" />
        </div>
        <div className="gallery-img">
          <img src={"/images/3.jpg"} alt="gallery" />
        </div>
        <div className="gallery-img">
          <img src={"/images/4.webp"} alt="gallery" />
        </div>
        <div className="gallery-img">
          <img src={"/images/5.webp"} alt="gallery" />
        </div>
        <div className="gallery-img">
          <img src={"/images/6.jpg"} alt="gallery" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
