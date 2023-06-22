import React from "react";
import { Link } from "react-router-dom";
import "./ToyCard.css";

const ToyCard = ({ toy }) => {
  const { _id, sellerName, toyName, subCategory, price, quantity } = toy;
  return (
    <div className="toy-card">
      <div>
        <p>
          <span className="text-bold">Toy Name: </span>
          {toyName}
        </p>
        <p>
          <span className="text-bold">Seller: </span>
          {sellerName}
        </p>
      </div>
      <div>
        <p>
          <span className="text-bold">Sub Category: </span>
          {subCategory}
        </p>
        <p>
          <span className="text-bold">Price: </span>${price}
        </p>
      </div>

      <div>
        <p>
          <span className="text-bold">Quantity: </span>
          {quantity}
        </p>
      </div>

      <div>
        <Link className="details" to={`/toy-details/${_id}`}>
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ToyCard;
