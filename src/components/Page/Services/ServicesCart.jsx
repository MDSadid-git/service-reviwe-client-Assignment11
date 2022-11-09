import React from "react";
import { Link } from "react-router-dom";

const ServicesCart = ({ ser }) => {
  return (
    <div className="card w-4/5 glass mx-auto my-9">
      <figure>
        <img src={ser.img} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{ser.title}</h2>
        <p>${ser.price}</p>
        <div className="card-actions justify-end">
          <Link to={`/checkout/${ser._id}`}>
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCart;
