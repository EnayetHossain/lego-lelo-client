import React from "react";
import DynamicTitle from "../../../Routes/DynamicTitle";
import Category from "../../Category/Category";
import Gallery from "../../Gallery/Gallery";
import HowMade from "../../HowMade/HowMade";
import Banner from "../Banner/Banner";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
  DynamicTitle("Home page");
  return (
    <div>
      <Banner></Banner>
      <Subscribe></Subscribe>
      <Gallery></Gallery>
      <Category></Category>
      <HowMade></HowMade>
    </div>
  );
};

export default Home;
