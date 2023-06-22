import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import "./CategoryCard.css";

const CategoryCard = ({ category }) => {
  const { _id, picture, toyName, price, ratings } = category;
  return (
    <div>
      <div className="category-card">
        <div className="category-img">
          <img src={picture} alt={toyName} />
        </div>

        <div className="category-info">
          <p className="category-name">{toyName}</p>
          <div className="price-rating">
            <p className="price">${price}</p>
            <p className="ratings">
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
        </div>

        <div className="category-cta">
          <Link to={`/toy-details/${_id}`} className="category-btn">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
