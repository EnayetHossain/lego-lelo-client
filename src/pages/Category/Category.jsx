import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCard from "../CategoryCard/CategoryCard";
import "./Category.css";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    AOS.init();
    fetch(`https://lego-lelo-server.vercel.app/toy-category/pre build`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const getCategory = (category) => {
    fetch(`https://lego-lelo-server.vercel.app/toy-category/${category}`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  return (
    <div className="category">
      <h1 className="text-center">Shop By Category</h1>
      <Tabs
        className="desktop-max tabs-container"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <TabList>
          <Tab onClick={() => getCategory("pre build")}>Pre Build</Tab>
          <Tab onClick={() => getCategory("lego car")}>Lego Car</Tab>
          <Tab onClick={() => getCategory("lego pices")}>Lego Pieces</Tab>
        </TabList>

        <TabPanel className="category-card-container">
          {categories.map((category) => (
            <CategoryCard key={category._id} category={category}></CategoryCard>
          ))}
        </TabPanel>
        <TabPanel className="category-card-container">
          {categories.map((category) => (
            <CategoryCard key={category._id} category={category}></CategoryCard>
          ))}
        </TabPanel>
        <TabPanel className="category-card-container">
          {categories.map((category) => (
            <CategoryCard key={category._id} category={category}></CategoryCard>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
