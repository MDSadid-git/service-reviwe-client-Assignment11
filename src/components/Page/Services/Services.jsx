import React, { useEffect, useState } from "react";
import ServicesCart from "./ServicesCart";

const Services = () => {
  const [Services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-10 mx-auto">
      <div className="text-center mb-4">
        <p className="text-2xl font-bold text-orange-600">Services</p>
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
    </div>
  );
};

export default Services;
