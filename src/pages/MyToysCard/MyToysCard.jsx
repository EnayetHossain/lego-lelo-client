import React from "react";
import { Link } from "react-router-dom";
import "./MyToysCard.css";

const MyToysCard = ({ toy, handleDelete }) => {
  const { _id, toyName, price, picture, subCategory, quantity } = toy;

  return (
    <div className="toy-card my-toy-card">
      <div className="toy-image">
        <img src={picture} alt={toyName} />
      </div>

      <div>
        <p>
          <span className="text-bold">Toy Name: </span>
          {toyName}
        </p>
        <p>
          <span className="text-bold">Sub Category: </span>
          {subCategory}
        </p>
      </div>

      <div>
        <p>
          <span className="text-bold">Quantity: </span>
          {quantity}
        </p>
        <p>
          <span className="text-bold">Price: </span>${price}
        </p>
      </div>

      <div>
        <Link className="edit update" to={`/toy-update/${_id}`}>
          Update
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="edit delete btn"
          to={"#"}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MyToysCard;
