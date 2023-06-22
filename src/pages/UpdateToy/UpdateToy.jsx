import React from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DynamicTitle from "../../Routes/DynamicTitle";
import "./UpdateToy.css";

const UpdateToy = () => {
  const loadedToys = useLoaderData();
  DynamicTitle(`Update | ${loadedToys.toyName}`);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.ToyName.value;
    const picture = form.photo.value;
    const ratings = form.ratings.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const details = form.toyDetails.value;

    const updateData = {
      toyName,
      picture,
      ratings,
      price,
      quantity,
      details,
    };
    fetch(`https://lego-lelo-server.vercel.app/toy-update/${loadedToys._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast("You toy has been updated");
        }
      });
  };

  return (
    <div>
      <div className="login-page">
        <div className="desktop-max login-wid">
          <h1 className="log-title">Update a Toy</h1>

          <form onSubmit={handleUpdate} className="login-form">
            <div className="login-input">
              <label htmlFor="ToyName">Toy Name</label>
              <br />
              <input
                type="text"
                id="ToyName"
                name="ToyName"
                placeholder="Toy Name"
                required
                defaultValue={loadedToys?.toyName}
              />
            </div>

            <div className="login-input">
              <label htmlFor="photo">Photo</label>
              <br />
              <input
                type="text"
                id="photo"
                name="photo"
                placeholder="Photo URL"
                required
                defaultValue={loadedToys?.picture}
              />
            </div>

            <div className="login-input">
              <label htmlFor="ratings">Ratings</label>
              <br />
              <input
                type="number"
                id="ratings"
                name="ratings"
                placeholder="Ratings"
                required
                step={"any"}
                defaultValue={loadedToys?.ratings}
              />
            </div>

            <div className="login-input">
              <label htmlFor="price">Price</label>
              <br />
              <input
                type="number"
                id="price"
                name="price"
                placeholder="Price"
                required
                step={"any"}
                defaultValue={loadedToys?.price}
              />
            </div>

            <div className="login-input">
              <label htmlFor="quantity">Quantity</label>
              <br />
              <input
                type="number"
                id="quantity"
                name="quantity"
                placeholder="Quantity"
                required
                defaultValue={loadedToys?.quantity}
              />
            </div>

            <div className="login-input">
              <label htmlFor="toyDetails">Toy Details</label>
              <br />
              <textarea
                rows={10}
                id="toyDetails"
                name="toyDetails"
                defaultValue={loadedToys?.details}
              ></textarea>
            </div>

            <div className="login-input">
              <input type="submit" value={"Update Toy"} name="update" />
            </div>

            <div>
              <p className="error"></p>
            </div>
          </form>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default UpdateToy;
