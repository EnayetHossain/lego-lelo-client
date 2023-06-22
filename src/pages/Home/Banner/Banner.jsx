import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./Banner.css";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="banner">
      <div className="banner-section desktop-max">
        <div
          className="banner-text"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <p className="banner-title">
            Embrace Your Creativity
            <br /> With LegoLelo
          </p>
          <p className="banner-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque at
            adipisci
            <br /> dolorum magnam illo obcaecati beatae, vel amet exercitationem
            esse ex cupiditate corrupti
            <br /> quod nulla fugiat quidem
          </p>
        </div>
        <div
          className="banner-img"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <img src="/lego.png" alt="lego" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
