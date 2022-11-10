import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServicesCart = ({ ser: { img, title, _id, description, price } }) => {
  return (
    <div className="card w-4/5 glass mx-auto my-9">
      <figure>
        <PhotoProvider>
          <PhotoView src={img}>
            <img src={img} alt="car!" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>${price}</p>
        <p>
          {description?.length > 60 ? (
            <>{description.slice(0, 60) + "..."}</>
          ) : (
            description
          )}
        </p>
        <hr />
        <div className="card-actions justify-end">
          <Link to={`/details/${_id}`}>
            <button className="btn btn-secondary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCart;
