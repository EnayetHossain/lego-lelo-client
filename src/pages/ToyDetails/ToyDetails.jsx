import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import DynamicTitle from "../../Routes/DynamicTitle";
import "./ToyDetails.css";

const ToyDetails = () => {
  const toy = useLoaderData();
  const {
    _id,
    picture,
    sellerName,
    toyName,
    details,
    quantity,
    ratings,
    price,
    email,
  } = toy;
  DynamicTitle(toyName);
  return (
    <div className="toy-details">
      <div className="desktop-max toy-element">
        <div className="toy-img">
          <img src={picture} alt={toyName} />
        </div>

        <div className="toy-info">
          <h1 className="toy-name">{toyName}</h1>

          <div className="price-ratings">
            <p className="price">${price}</p>
            <p>
              <Rating
                className="ratings"
                readonly
                placeholderRating={ratings}
                emptySymbol={<FaRegStar></FaRegStar>}
                placeholderSymbol={<FaStar></FaStar>}
                fullSymbol={<FaStar></FaStar>}
              />
              {ratings}
            </p>
          </div>

          <hr />

          <div className="seller-info">
            <div>
              <p className="seller-name">
                <span className="text-bold">Seller name: </span>
                {sellerName}
              </p>
              <p className="seller-name">
                <span className="text-bold">Seller email: </span>
                {email}
              </p>
            </div>
            <div>
              <p className="quantity">
                <span className="text-bold">Quantity: </span>
                {quantity}
              </p>
            </div>
          </div>

          <div className="toy-description">
            <p>
              <span className="text-bold">Details: </span>
              {details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
