import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Providers/AuthProvider";
import DynamicTitle from "../../Routes/DynamicTitle";
import MyToysCard from "../MyToysCard/MyToysCard";
import "./MyToys.css";

const MyToys = () => {
  DynamicTitle("My Toys");
  const { user } = useContext(AuthContext);
  const [myToy, setMyToy] = useState([]);
  const url = `https://lego-lelo-server.vercel.app/my-toys?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToy(data));
  }, [url]);

  const handleDelete = (id) => {
    const confirmDelete = confirm("Are you sure?");
    if (confirmDelete) {
      fetch(`https://lego-lelo-server.vercel.app/toy-delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast("Your toy has been deleted");
            const remaining = myToy.filter((toy) => toy._id !== id);
            setMyToy(remaining);
          }
        });
    }
  };

  const handleSort = (event) => {
    event.preventDefault();
    const form = event.target;
    const sort = form.sort.value;

    fetch(
      `https://lego-lelo-server.vercel.app/my-toys?email=${user.email}&sort=${sort}`
    )
      .then((res) => res.json())
      .then((data) => setMyToy(data));
  };

  return (
    <div className="my-toy-cards">
      <div className="desktop-max my-toy-container">
        <h1 className="toy-title">Toys You have added</h1>

        <form onSubmit={handleSort} className="sort-form">
          <select name="sort" className="sort">
            <option>Ascending</option>
            <option>Descending</option>
          </select>
          <input type="submit" value={"Sort"} />
        </form>

        {myToy.map((toy) => (
          <MyToysCard
            key={toy._id}
            toy={toy}
            handleDelete={handleDelete}
          ></MyToysCard>
        ))}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default MyToys;
