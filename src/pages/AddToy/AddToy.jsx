import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Providers/AuthProvider";
import DynamicTitle from "../../Routes/DynamicTitle";
import "./AddToy.css";

const AddToy = () => {
  DynamicTitle("Add a Toy");
  const { user } = useContext(AuthContext);
  // add a toy
  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const toyName = form.ToyName.value;
    const photo = form.photo.value;
    const seller = form.seller.value;
    const email = form.email.value;
    const ratings = form.ratings.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const subCategory = form.subcategory.value;
    const toyDetails = form.toyDetails.value;

    const toy = {
      picture: photo,
      sellerName: seller,
      toyName,
      details: toyDetails,
      quantity,
      ratings,
      price,
      email,
      subCategory,
    };

    // make a post request to server
    fetch("https://lego-lelo-server.vercel.app/add-toy/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast("Your toy has been added");
          form.reset();
        }
      });
  };

  return (
    <div className="login-page">
      <div className="desktop-max login-wid">
        <h1 className="log-title">Add a Toy</h1>

        <form onSubmit={handleAddToy} className="login-form">
          <div className="login-input">
            <label htmlFor="ToyName">Toy Name</label>
            <br />
            <input
              type="text"
              id="ToyName"
              name="ToyName"
              placeholder="Toy Name"
              required
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
            />
          </div>

          <div className="login-input">
            <label htmlFor="seller">Seller Name</label>
            <br />
            <input
              type="text"
              id="seller"
              name="seller"
              placeholder="Seller Name"
              required
              defaultValue={user.displayName ? user.displayName : ""}
            />
          </div>

          <div className="login-input">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              required
              defaultValue={user.email ? user.email : ""}
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
            />
          </div>

          <div className="login-input">
            <label htmlFor="subcategory">Sub Category</label>
            <br />
            <select className="subcategory" name="subcategory">
              <option>lego pices</option>
              <option>pre build</option>
              <option>lego cars</option>
            </select>
          </div>

          <div className="login-input">
            <label htmlFor="toyDetails">Toy Details</label>
            <br />
            <textarea rows={10} id="toyDetails" name="toyDetails"></textarea>
          </div>

          <div className="login-input">
            <input type="submit" value={"Add Toy"} name="Add" />
          </div>

          <div>
            <p className="error"></p>
          </div>
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddToy;
