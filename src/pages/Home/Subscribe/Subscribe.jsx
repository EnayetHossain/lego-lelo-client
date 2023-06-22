import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./Subscribe.css";

const Subscribe = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="subscribe-section desktop-max">
        <div
          className="subscribe-img"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <img src="/subscribe.webp" alt="subscribe" />
        </div>

        <div className="subscribe-info">
          <p
            className="subscribe-text"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            Subscribe to get
            <br /> 20% off
          </p>
          <form
            className="subscribe-form"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <input type="text" placeholder="Enter name" />
            <input type="email" placeholder="Enter email" />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
