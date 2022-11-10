import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServicesCart from "./ServicesCart";

const Services = () => {
  const [Services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://service-review-server-weld.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-10 py-10 mx-auto">
      <hr />
      <div className="text-center mb-4">
        <p className="text-5xl font-extrabold text-cyan-400">Our Services</p>
        <h2 className="text-5xl font-semibold my-7">Sports PhotoGrapher</h2>
        <p>
          Sport is a dominant force in people’s lives. It’s an obsession for{" "}
          <br />
          millions all over the world. They watch events on TV, fill stadiums,
          <br />
          and lace up their boots to play. From football to table tennis, we all
          love sports.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {Services.map((ser) => (
          <ServicesCart key={ser._id} ser={ser}></ServicesCart>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to={`/servicespage`}>
          <button className="btn mx-auto btn-outline">See all</button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
