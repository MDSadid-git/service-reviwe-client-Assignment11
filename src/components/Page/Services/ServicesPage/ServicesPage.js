import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import ServicesCart from "../ServicesCart";

const ServicesPage = () => {
  useTitle("services");
  const [Services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://service-review-server-weld.vercel.app/servicespage")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="w-4/5 mx-auto py-20">
      <div className="flex justify-center">
        <Link to={"/newservices"}>
          <button className="btn btn-active btn-secondary">Add Service</button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {Services.map((ser) => (
          <ServicesCart key={ser._id} ser={ser}></ServicesCart>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
