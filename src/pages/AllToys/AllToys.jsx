import React, { useEffect, useState } from "react";
import DynamicTitle from "../../Routes/DynamicTitle";
import ToyCard from "../ToyCard/ToyCard";
import "./AllToys.css";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  DynamicTitle("All Toys");

  useEffect(() => {
    fetch("https://lego-lelo-server.vercel.app/all-toys?limit=20")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const loadAllData = (event) => {
    event.preventDefault();
    fetch("https://lego-lelo-server.vercel.app/all-toys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const search = form.search.value;
    fetch(`https://lego-lelo-server.vercel.app/search-toy/${search}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  return (
    <div className="all-toys">
      <h1 className="toys-title">All Toys</h1>

      <form onSubmit={handleSearch} className="search-toy">
        <input type="search" placeholder="Search your toy" name="search" />
        <input type="submit" value={"Search"} />
      </form>

      <div className="desktop-max">
        {toys.map((toy) => (
          <ToyCard key={toy._id} toy={toy}></ToyCard>
        ))}
      </div>

      <button onClick={loadAllData} className="btn btn-view">
        View All Toys
      </button>
    </div>
  );
};

export default AllToys;
