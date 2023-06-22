/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "./Notfound.css";

const Notfound = () => {
  return (
    <div>
      <div className="not-container">
        <Link className="home" to="/">
          Go Back To Home
        </Link>
      </div>
    </div>
  );
};

export default Notfound;
