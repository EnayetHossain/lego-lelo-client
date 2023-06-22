import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./HowMade.css";

const HowMade = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="how-made-container">
      <div
        className="how-made-body desktop-max"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="how-made-info">
          <p className="how-made-title">How We Made</p>
          <p className="how-made-description">
            The process of making LEGO involves several steps,
            <br /> from the design stage to the manufacturing of the bricks.
            <br />
            Here is a general overview of the process:
          </p>
          <ul className="how-made-list">
            <li>
              <strong>Design: </strong>LEGO designers come up with new ideas for
              sets
              <br /> and models. They create digital prototypes using
              computer-aided<strong>....</strong>
            </li>
            <li>
              <strong>Molding: </strong>Once the designs are finalized, molds
              are created. These
              <br />
              molds are made from metal and are precision-engineered
              <strong>....</strong>
            </li>
            <li>
              <strong>Plastic Injection: </strong>The molding process begins
              with plastic
              <br />
              pellets, typically made from acrylonitrile butadiene styrene
              <strong>....</strong>
            </li>
            <li>
              <strong>Quality Control: </strong>Once the bricks are cooled and
              solidified, they
              <br />
              go through a rigorous quality control process. LEGO has strict
              <strong>....</strong>
            </li>
            <li>
              <strong>Packaging: </strong>After passing quality control, the
              LEGO bricks are
              <br />
              sorted, counted, and packaged into sets. Depending on the sets
              <strong>....</strong>
            </li>
            <li>
              <strong>Distribution: </strong> Once packaged, LEGO sets are
              prepared for
              <br />
              distribution. They are shipped to various retail stores and LEGO
              <strong>....</strong>
            </li>
          </ul>
          <a href="#" className="know">
            Know More
          </a>
        </div>
        <div className="how-made-img">
          <img src="/lego-factory.jpg" alt="lego factory" />
        </div>
      </div>
    </div>
  );
};

export default HowMade;
